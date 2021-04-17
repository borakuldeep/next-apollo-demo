import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

// import { initializeApollo } from "../lib/apolloClient";
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

  if (loading) return <div className={styles.loader}></div>;

  if (error) {
    console.log(error);
    return (
      <div>
        <p className={styles.error}>
          Oops!! something went wrong. Make sure server is up and running at
          port 4000
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
          <Person key={u.email} person={u} />
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

/* Commented for building docker image as build will fail with no server running inside docker context */
/* populate data during build time */
// export const getStaticProps = async () => {
//   const apolloClient = initializeApollo();
//   await apolloClient.query({
//     query: GET_USERS,
//     variables: {
//       offset: 0,
//       limit: 10,
//     },
//   });
//   return { props: { initialApolloState: apolloClient.cache.extract() } };
// };
