import { Input } from "@/components/ui/input"

const Home = () => {
    return (

        <div className="bg-gray-300 h-screen w-screen flex justify-center items-start rounded-xl ">
            <Input type="email" className="w-96 border-2 border-black rounded-xl " placeholder="Email" />
        </div>
    )
}
export default Home