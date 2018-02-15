const employees = [
    {
        name: `Brian Sutachan`,
        hourlyrate: 9.25,
        hoursworked: 50
    },

    {
        name: `Jose Nolastname`,
        hourlyrate: 11.85,
        hoursworked: 78
    },

    {
        name: `Toby Mydog`,
        hourlyrate: 15.18,
        hoursworked: 40
    }
]

class Payroll {
    constructor(employees) {
        this.employees = employees
        this.names = this.getNames(this.employees)
        this.fulltime = this.getFullTime(this.employees)
        this.totallabor = this.getTotalLabor(this.employees)

    }


    getNames(employees) {
        const newarray = employees.map((emplo) => {
            return emplo.name
        })
        // console.log(newarray)
        return newarray.sort()
    }

    getFullTime(employees) {
        return employees.filter((emplo)=> {
            return (emplo.hourlyrate > 60) ? 1 : 0
        })

    }
    getTotalLabor(employees) {
        return employees.reduce((acc, curr) =>{
            return acc + (cur+hourlyrate * hoursworked)
        }, 0)

    }


}


const pay = new Payroll()
console.log(this.names)
console.log(pay.fullTime)
console.log(pay.totallabor)

