import React, {useEffect} from 'react';
import {List, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";
import {actionSearchPosts} from "../redux/reducers/annReducer";
const {Search} = Input;
const ListAnnouncement = (props) => {
    const dispatch = useDispatch();
    const postsSearch = useSelector(state => state.annReducer.searchPosts)

    useEffect(()=>{
        dispatch(actionSearchPosts(''))
    },[])

    const onSearch = value => {
        dispatch(actionSearchPosts(value))
    };
    return (
        <div>
            <Search
                placeholder="search announcement"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
            <List
                itemLayout="horizontal"
                dataSource={postsSearch}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Link to={"/page/"+item.id}>{item.title}</Link>}
                        />
                        <div>{moment(item.date).format('DD.MM.YYYY h:mm:ss')}</div>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default ListAnnouncement;