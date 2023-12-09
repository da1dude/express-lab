const students = [
    {student: 'PaulyK', id: 1111},
    {student: 'Bebop', id: 2222},
    {student: 'Hawkman', id: 3333}
];

module.exports = {
    getAll: function() {
        return students;
    }
};