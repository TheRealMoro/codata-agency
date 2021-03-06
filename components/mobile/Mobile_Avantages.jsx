import items from "../json/avantages_items";

export default function Mobile_Avantages() {
    return (
        <section className = "container flex flex-col items-center mx-auto text-center space-y-3 mt-5">
            <section className = "space-y-3">
                <h1 className = "text-2xl text-gray-800 font-bold">Découvrez nos principaux <span className = "text-green-900 font-black">avantages</span></h1>
                <h3 className = "text-xl text-green-500"> Pourquoi faire appel à notre agence web ? </h3>
            </section>
            <section className = "grid items-center py-4 space-y-6">
                {
                    items.map(item => (
                        <section className = "group items-center flex flex-col space-y-2 hover:scale-105 transition duration-200 ease-out cursor-text w-3/4 mx-auto">
                            <img src={item.img} alt="" className = "h-11" />
                            <h4 className = "text-md text-gray-900 font-semibold group-hover:font-bold">{item.title}</h4>
                            <p className = "text-xs text-gray-400 text-center group-hover:text-gray-700">
                                {item.p}
                            </p>
                        </section>
                    ))
                }
            </section>
        </section>
    )
}
