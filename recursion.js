let user = {
    name: "Madhubala",
    parents: {
        mother: {
            name: "Bharathi",
            occupatoin: "Home maker" 
        },
        father: {
            name: "Jayakumaran",
            occupatoin: "Co-operative Bank Secretary"
        }
    },
    address: {
        town: "Mannargudi"
    }
}

let finalUser = {}

const magic = (object, parent) => {
    for(let key in object) {
        if(typeof(object[key]) === 'object') {
            magic(key, `${parent}_${key}`)
        }
        else {
            console.log(`${parent}_${key}: ${object[key]}`)
        }
    }
}

magic(user, "user")