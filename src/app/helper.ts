export class Helper {

    static randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static randomFutureDate() {
        return new Date(new Date().getTime() + Math.random() * (1e+10));
    }

    static randomTime() {
        var date = new Date();
        date.setHours(Helper.randomIntFromInterval(9, 18));
        date.setMinutes(0);
        date.setSeconds(0);
        return date;
    }

    static dayOfWeekAsString(dayIndex: number) {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
    }

    static monthAsString(monthIndex: number) {
        return ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][monthIndex] || '';
    }
}