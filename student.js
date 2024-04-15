let FULLNAME = "Jan Kowalski";
let STUDENT_ID = "123456";

function getStudentFullName(id) {
    switch (id) {
        case 0:
            return FULLNAME;
        case 1:
            return "Kacper Nowak";
        case 2:
            return "Maja Kowalska";
        default:
            return "Michal Wisniewski";
    }
}

function getStudentId(id) {
    switch (id) {
        case 0:
            return STUDENT_ID;
        case 1:
            return "111222";
        case 2:
            return "222333";
        default:
            return "333444";
    }
}

module.exports = {
    getStudentFullName,
    getStudentId,
};
