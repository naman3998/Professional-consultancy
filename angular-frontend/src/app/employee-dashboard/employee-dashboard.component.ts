import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {


  employees: Employee[] = []; 
  constructor(private employeeService: EmployeeService,private authService: AuthService,public router: Router) { }

  ngOnInit(): void {

    this.getEmployees();
  }


  private getEmployees(){

    this.employeeService.getEmployeesList().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details',id]);

  }

  doLogout() {
		this.authService.logout();
		this.router.navigateByUrl('login');
	}

  employeeDash(){
    this.router.navigateByUrl('employee-dashboard');
  }

  onClick(){
    this.router.navigate(['/employees']);
  }
}
