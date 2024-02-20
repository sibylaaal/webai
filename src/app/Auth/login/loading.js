import Loader from "@/app/components/loaders/loader";




export default function Loading(){
    return(
        <>
        <div className="bg-white flex justify-center align-centerh-full">
        <Loader/>
        </div>
        </>
    )
}