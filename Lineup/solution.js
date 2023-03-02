function solution(commands) {
    let student1 = "south";
    let student2 = "south";
    let count = 0;
    for (let i = 0; i < commands.length; i++) {
        let char = commands[i];
        if (char === "L") {
            if (student1 === "south") {
                student1 = "east";
            } else if (student1 === "north") {
                student1 = "west";
            } else if (student1 === "west") {
                student1 = "south";
            } else if (student1 === "east") {
                student1 = "north";
            }
            if (student2 === "south") {
                student2 = "west";
            } else if (student2 === "north") {
                student2 = "east";
            } else if (student2 === "west") {
                student2 = "north";
            } else if (student2 === "east") {
                student2 = "south";
            }
        }
        if (char === "R") {
            if (student1 === "south") {
                student1 = "west";
            } else if (student1 === "north") {
                student1 = "east";
            } else if (student1 === "west") {
                student1 = "north";
            } else if (student1 === "east") {
                student1 = "south";
            }
            if (student2 === "south") {
                student2 = "east";
            } else if (student2 === "north") {
                student2 = "west";
            } else if (student2 === "west") {
                student2 = "south";
            } else if (student2 === "east") {
                student2 = "north";
            }
        }
        if (char === "A") {
            if (student1 === "south") {
                student1 = "north";
            } else if (student1 === "north") {
                student1 = "south";
            } else if (student1 === "west") {
                student1 = "east";
            } else if (student1 === "east") {
                student1 = "west";
            }
            if (student2 === "south") {
                student2 = "north";
            } else if (student2 === "north") {
                student2 = "south";
            } else if (student2 === "west") {
                student2 = "east";
            } else if (student2 === "east") {
                student2 = "west";
            }
        }
        if (student1 === student2) {
            count += 1;
            console.log(student1);
            console.log(student2);
        }
    }
    return count;
}
