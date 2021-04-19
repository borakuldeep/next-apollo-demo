import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

import UserCard from "../components/UserCard";
import styles from "../styles/Users.module.css";

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

  if (loading) {
      return (
        <div>
          <div className={styles.loader}></div>
          <p> Might take few sceonds first time </p>
        </div>
      );
  }

  if (error) {
    return (
      <div>
        <p className={styles.error}>
          Oops!! something went wrong. Make sure server is up and running.
        </p>
        <Link href="/">
          <button>
            <a>Go Home</a>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.title}>User's List</h1>
      <br />
      <div className={styles.userlist}>
        {data?.users.map((u) => (
          <UserCard key={u.email} userInfo={u} />
        ))}
        
      </div>

      <br />
      <div className={styles.actions}>
          <Link href="/">
            <button>
              <a>Go Home</a>
            </button>
          </Link>
          <button
            onClick={() =>
              fetchMore({
                variables: {
                  offset: data?.users?.length,
                },
              })
            }
          >
            Load more
          </button>
        </div>
    </div>
  );
};

export default Users;

/* getStaticProps Comment this function for building docker image when using local server since local server will not be available in context*/
/* uncomment to populate data during build time */

/*export const getStaticProps = async () => {
  const {initializeApollo} = await import('../lib/apolloClient');
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
*/
