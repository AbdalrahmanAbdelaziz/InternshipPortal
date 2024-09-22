import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {
  companies: any[] = []; // Adjust type if needed

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companiesService.getCompanies().subscribe(
      data => this.companies = data,
      error => console.error('Error fetching companies:', error)
    );
  }

  deleteCompany(companyId: string): void {
    if (confirm('Are you sure you want to delete this company?')) {
      this.companiesService.deleteCompany(companyId).subscribe(
        () => {
          this.companies = this.companies.filter(company => company.id !== companyId);
        },
        error => console.error('Error deleting company:', error)
      );
    }
  }
}
