import React from 'React'
import PostsHolder from './PostHolder';
import PostListItem from './PostListItem'
import Posts from './Posts'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AddPost from './AddPost';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    // render() {
    //     // return <h1>Hello to Reac from app.jsx</h1>;
    //     return <div>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>ID</th>
    //                     <th>Name</th>
    //                     <th>Description</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {posts.map(post => {
    //                     return <tr key={post.id.toString()}>
    //                         <td>{post.id}</td>
    //                         <td>{post.name}</td>
    //                         <td>{post.description}</td>
    //                     </tr>
    //                 })}
    //             </tbody>
    //         </table>
    //     </div>
    // }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/posts'>
                        <PostsHolder />
                    </Route>
                    <Redirect to='/posts'/>
                </Switch>
            </Router>
            //  <div>
            //      <Posts posts = {posts}/>
            //  </div>
            // <PostsHolder/>
        );
    }
}

// const posts = [
//     {
//         id: 1,
//         name: "React",
//         description: "Best UI library"
//     },
//     {
//         id: 2,
//         name: "Node",
//         description: "Server side JS"
//     }
// ];