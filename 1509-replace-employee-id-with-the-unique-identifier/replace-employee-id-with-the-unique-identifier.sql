select 
    emp.name, empU.unique_id
from
    employees as emp
    left join
    employeeUNI as empU
    on emp.id = empU.id
