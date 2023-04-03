import { differenceInYears } from "date-fns";

const myBirthday = new Date(0);
myBirthday.setFullYear(2005, 3, 8);

export default function getBirthday() {
    return `I'm ${differenceInYears(
        new Date(),
        myBirthday
    )} and I love building things`;
}
