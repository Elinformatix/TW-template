<div className="w-1/4 flex flex-col ">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={ai} ></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div className="">
                    <h2 className="text-xl text-gray-800">nfttitle</h2>
                    <p className="text-gray-600">Id: id contrato</p>
                    <p className="text-gray-600" >nombre</p>
                </div>

                <div className="flex-grow mt-2">
                    <p className="text-gray-600">description</p>
                </div>
                <div className="flex justify-center mb-1">
                    <a target={"_blank"} href={`https://etherscan.io/token/direccion`} className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer">View on etherscan</a>
                </div>
            </div>
        </div>