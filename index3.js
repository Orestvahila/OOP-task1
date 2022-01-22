
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    get experience() {
        return this.#experience;
        }
    set experience(value) {
        return this.#experience = value;
        }
    
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.showSalary() * this.experience;
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
console.log(`${worker1.fullName} salary: ${worker1.showSalary()}`);
console.log(`New experience: ${worker1.experience}`);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);
worker1.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
console.log(`${worker2.fullName} salary: ${worker2.showSalary()}`);
console.log(`New experience: ${worker2.experience}`);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);
worker2.experience = 1.5;
console.log(`New experience: ${worker2.experience}`);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);
worker1.showSalaryWithExperience();

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
console.log(`${worker3.fullName} salary: ${worker3.showSalary()}`);
console.log(`New experience: ${worker3.experience}`);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);
worker3.experience = 1.5;
console.log(`New experience: ${worker3.experience}`);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);
worker1.showSalaryWithExperience();

let arr = [worker1, worker2, worker3];
console.log('Sorted salary:')
let sorted = arr.sort((a,b) => 
    a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1
    : b.showSalaryWithExperience() > a.showSalaryWithExperience() ? -1
    : 0 );

for (let i = 0; i < sorted.length; i++){
    console.log(`${sorted[i].fullName}: ${sorted[i].showSalaryWithExperience()}`)
}
