import React, { Component } from 'react';
import './BlogPost.css'
import Post from './Post'
import API from '../../services/index';

class BlogPost extends Component {

    state = {
        listArtikel: [],
        insertArtikel:{
            userId: 1,
            id: 6,
            title: "This is A new insert",
            body:"New Insert "
        }
    }

    handleTombolSimpan = () => {
        // fetch('http://localhost:3001/posts', {
        //     method: 'post',
        //     headers:{
        //         'Accept' : 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.insertArtikel)
        // })
            API.postNewsBlog(this.state.insertArtikel)
            .then((Response) => {
                this.ambilDataDariServerAPI();
            })
    }

    handleTombolDelete = () => {
        // fetch('http://localhost:3001/posts', {
        //     method: 'post',
        //     headers:{
        //         'Accept' : 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.insertArtikel)
        // })
            API.deleteNewsBlog(3)
    }

    ambilDataDariServerAPI = () =>{
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(jsonHasilAmbilDariAPI =>{
        //     this.setState({
        //         listArtikel: jsonHasilAmbilDariAPI
        //     })
        // })
        this.ambilDataDariServerAPI()
    }
    render() {
        this.handleTombolDelete();
        return (
            <div>
                <div className="post-artikel">
                    <h2>Daftar Artikel</h2>
                    {
                        this.state.listArtikel.map(artikel => {
                            return <Post key = {artikel.id} judul={artikel.title} isi = {artikel.body}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BlogPost;
