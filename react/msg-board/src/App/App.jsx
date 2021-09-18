import { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form'
import Post from '../components/Post/Post';

export default class App extends Component {
  state = {
    posts: []
  }

  getPosts = async () => {
    // await fetch("/api").then((res) => res.json()).then(data => this.setState({posts: data}))
    const res = await fetch("/api");
    const data = await res.json();
    // console.log(data)
    this.setState({posts: data.data});
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    console.log(this.state.posts)
    return (
      <main className="App">
        {this.state.posts.length ? 
          this.state.posts.map(p => (
            <Post
              post={p}
              getPosts={this.getPosts}
            />
          ))
          :
          <h1>No Posts</h1>
          }
        <Form
          getPosts={this.getPosts} 
        />
      </main>
    )
  }
}


