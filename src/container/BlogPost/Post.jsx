import React from 'react'

const Post = (props) => {
        return (
            <div>
                    <div className="artikel">
                        <div className="gambar-artikel">
                            <img src="http://placeimg.com/88/88/tech" alt="Gambar Tumbnail Artikel"/>
                        </div>
                        <div className="konten-artikel">
                            <div className="judul-artikel">{props.judul}</div>
                            <p className="isi-artikel">{props.isi}</p>
                        </div>
                    </div>
            </div>
        )
    
}

export default Post;
