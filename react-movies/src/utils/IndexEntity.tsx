import { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import Button from "../utils/Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import customConfirm from "../utils/customConfirm";
import GenericList from "./GenericList";
import { ReactElement } from "react-markdown";

export default function IndexEntity<T>(props: indexEntityProps<T>){
    const [entities, setEntities] = useState<T[]>();

    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);



    function loadData(){
        axios.get(props.url, {
            params: {page, recordsPerPage}
        })
                .then((response: AxiosResponse<T[]>) =>{
                    const totalAmountOfRecords = 
                        parseInt(response.headers['totalamountofrecords'], 10);
                    setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
                    setEntities(response.data);
                })
    }
    
    useEffect(() =>{
        loadData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [page, recordsPerPage]);

    async function deleteEntity(id:number) {
        try{
            await axios.delete(`${props.url}/${id}`);
            loadData();
        }
        catch(error){
            if(error && (error as AxiosError<{ data: string }>).response){
                console.error();
            }
        }
        
    }
    const buttons = (editUrl: string, id: number) => <>
            <Link className="btn btn-success" to={editUrl}>Edit</Link>
            
            <Button onClick={ () => customConfirm(() => deleteEntity(id)) } className="btn btn-danger">Delete</Button>
    </>
    
    return(
        <>
            <h3>{props.title}</h3>
            <Link className="btn btn-primary" to={props.createUrl}>Create {props.entityName}</Link>

            <RecordsPerPageSelect onChange={amountOfRecords => {
                setPage(1);
                setRecordsPerPage(amountOfRecords);
            }} />

            <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage => setPage(newPage)} />

            <GenericList list={entities}>
                <table className="table table-striped">
                    {props.children(entities!, buttons)}
                    

                </table>
            </GenericList>
        </>
    )
}

interface indexEntityProps<T>{
    url : string;
    title: string;
    createUrl: string;
    entityName: string;
    children(entities: T[], buttons:(editUrl:string, id:number) => ReactElement): ReactElement;
}