export { default, getServerSideProps } from './[status]';

// // import { gql, useQuery } from '@apollo/client'
// import Head from 'next/head'
// // import { useReducer } from 'react'
// import { TasksDocument, useTasksQuery } from '../generated/graphql-frontend'
// import { initializeApollo } from '../lib/client'
// import TaskList from '../components/TaskList';
// import CreateTaskForm from '../components/CreateTaskForm';
// import TaskFilter from '../components/TaskFilter';
// // import styles from '../styles/Home.module.css'

// // const TasksQueryDocument = gql`
// //   query Tasks {
// //   tasks {
// //     id
// //     title
// //     status
// //   }
// // }
// // `

// interface TasksQuery {
//   tasks: {id: number; title: string; status: string}[];
// }

// export default function Home() {
//   // const result = useQuery<TasksQuery>(TasksQueryDocument);
//   const result = useTasksQuery();
//   const tasks = result.data?.tasks;

//   return (
//     <div>
//       <Head>
//         <title>Tasks</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <CreateTaskForm onSuccess={result.refetch} />
//       {
//         result.loading ? (
//           <p>Loading tasks...</p>
//         ) : result.error ? (
//           <p>An error occured.</p>
//         ) :
//         tasks && 
//         tasks.length > 0 ? (
//           <TaskList tasks={tasks} />
//         ) : (
//           <p className="no-tasks-message">You've got no tasks.</p>
//         )
//       }
//       <TaskFilter />
//     </div>
//   )
// }

// export const getStaticProps = async() => {
//   const apolloClient = initializeApollo();

//   await apolloClient.query<TasksQuery>({
//     // query: TasksQueryDocument,
//     query: TasksDocument,
//   });

//   return {
//     props: {
//       initializeApolloState: apolloClient.cache.extract(),
//     }
//   };
// }
