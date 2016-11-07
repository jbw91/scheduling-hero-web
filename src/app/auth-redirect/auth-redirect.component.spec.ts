/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { RouterOutletStubComponent } from '../../testing';
import { provideRoutes } from '@angular/router';
import { AuthRedirectComponent } from './auth-redirect.component';
import { SessionStorageService } from '../shared';

describe('Component: AuthRedirect', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterOutletStubComponent],
      imports: [RouterTestingModule],
      providers: [provideRoutes([]), SessionStorageService, HttpModule]
    });
  });

  it('should create an instance', () => {
    let component = new AuthRedirectComponent(this.Router, this.SessionStorageService);
    expect(component).toBeTruthy();
  });
});
