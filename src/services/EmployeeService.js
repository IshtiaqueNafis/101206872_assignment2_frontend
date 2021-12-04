import http from "./common";

const getAllEmployee = () => http.get("/employees")

const getSingleEmployee = id => http.get(`/employees/${id}`)

const removeEmployee = id => http.delete(`/employees/${id}`)

const updateEmployee = (id, data) => http.put(`/employees/${id}`, data)

const createEmployee = data => http.post('/employees', data)

const EmployeeService = {
    getAllEmployee,
    getSingleEmployee,
    removeEmployee,
    updateEmployee,
    createEmployee
};

export default EmployeeService;