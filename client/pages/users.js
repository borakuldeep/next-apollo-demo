import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

import { initializeApollo } from "../lib/apolloClient";
import Person from "../components/Person";
import styles from "../styles/Person.module.css";

export const GET_USERS = gql`
  query getUsers($offset: Int, $limit: Int) {
    users(offset: $offset, limit: $limit) {
      name
      gender
      email
      address {
        street
        city
        country
      }
      phone
    }
  }
`;

const Users = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_USERS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className={styles.title}>User's List</h1>
      <br />
      <div className={styles.userlist}>
        {data?.users.map((u) => (
          <Person key={u.email} person={u} />
        ))}
        <div className={styles.fetchbtn}>
          <button
            onClick={() =>
              fetchMore({
                variables: {
                  offset: data?.users?.length,
                },
              })
            }
          >
            Fetch 10 more
          </button>
        </div>
      </div>

      <br />
      <Link href="/">
        <button>
          <a>Go Back</a>
        </button>
      </Link>
    </div>
  );
};

export default Users;

// populate data during build time
export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_USERS,
    variables: {
      offset: 0,
      limit: 10,
    },
  });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
