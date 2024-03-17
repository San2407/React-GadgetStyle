export let products = [
    {
        category: "Celulares",
        title: 'TCL 40 SE 256 GB dark gray 6 GB RAM',
        description: 'Dispositivo liberado para que elijas la compañía telefónica que prefieras.Pantalla IPS de 6.75".Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.',
        price: 250.999,
        img: "https://res.cloudinary.com/dsnqnbiib/image/upload/v1708901361/GadgetStyle/celulares/faln6cxtaosnjvnzeyn7.jpg",
        stock: 10
    },

    //fundas
    {
        category: "Fundas",
        title: 'Funda Reforzada Anillo Antigolpe Para Samsung A04e',
        description: 'Posee protector de cámara.Con anillo trasero para una mejor sujeción.Su diseño elegante y funcional que garantiza una protección óptima ',
        price: 7.350,
        img: "https://res.cloudinary.com/dsnqnbiib/image/upload/v1708877283/GadgetStyle/fundas/vxca7hyjxlbsumyvvwnk.webp",
        stock: 8
    },
]

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const item = products.find(product => product.id === id)
            setTimeout(() => {
                if (item) {
                    console.log(item)
                    resolve(item)
                } else {
                    reject(`No se encuentra el producto con el id ${id}`)
                }
            }, 2000)
        } else {
            reject("No Hay Productos")
        }
    })
}