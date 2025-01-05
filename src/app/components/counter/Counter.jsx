export default function Counter() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">

            <div
                className="min-w-[350px] text-center block  bg-white border border-gray-200 rounded-lg shadow overflow-hidden ">
                <h2 className="text-2xl text-white font-bold mb-8 bg-gray-800 py-2">Counter APP</h2>
                <div className="p-6">
                    <h5 className="mb-2 text-6xl font-bold text-gray-900 ">
                        88</h5>
                    <div className="mt-8 flex gap-2 justify-center">
                        <button type="button" className="py-2 px-8 bg-green-400 text-white text-3xl">+</button>
                        <button type="button" className="py-2 px-8 bg-red-500 text-white text-3xl">-</button>
                    </div>
                </div>
            </div>

        </div>
    )
}