'use client'
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { Login } from "./redux/slices/AuthSlices";

export default function usePost() {
    const [data2, setData] = useState(null);
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(false);
    const dispatch=useDispatch()
    const router=useRouter()

    const Post = (endPoint, postData) => {
        setLoading(true);
        fetch(`http://localhost:3002/${endPoint}`, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            setData(res);
            setLoading(false);
            res.user?  dispatch(Login(res)):null

            res.user?  router.push("/"):null

            console.log(res);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
            console.error(err);
        });
    };
    const PostwithOutjson=(endPoint,postData)=>{





        setLoading(true);
        fetch(`http://localhost:3002/${endPoint}`, {
            method: "POST",
            body: postData // Use FormData instead of JSON.stringify
            // Don't set Content-Type header, let the browser handle it
        })
        .then(res => res.json())
        .then(res => {
            setData(res);
            setLoading(false);
            console.log(res);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
            console.error(err);
        });
    }

    return { data2, error, Loading, Post ,PostwithOutjson};
}
