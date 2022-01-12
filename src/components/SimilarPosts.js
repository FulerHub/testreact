import React from 'react';
import {useSelector} from "react-redux";
import {Card} from "antd";
import moment from "moment";

const SimilarPosts = (props) => {
    const getSimilarPost = (str, str2) =>{
        const strArray = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
        const str2Array = str2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
        for(let i=0; i<str2Array.length; i++){
            return strArray.includes(str2Array[i])
        }
    }
    let numPost = 0;
    const posts = useSelector(state => state.annReducer.posts)
    const postClose = posts.filter(function (item) {
        if( (item.id !== props.post.id && numPost < 3  && (getSimilarPost(item.description,props.post.description) || getSimilarPost(item.title,props.post.title)))){
            numPost++
            console.log(numPost, item)
            return true;
        }
    })
    return (
        <div>
           <h2>Similar posts</h2>
            {postClose.length > 0 ?
                <div className="similar">
                    {postClose.map(item =><Card title={item.title} bordered={false} style={{ width: 250 }}><p>{moment(item.date).format('DD.MM.YYYY h:mm:ss')}</p></Card>)}
                </div>
                :
                "Not have Similar"
            }
        </div>
    );
};

export default SimilarPosts;