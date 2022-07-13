import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleCRM';
  success_msg=false;
  superPower = 'wonderWomen';
  styleProp="purple"
  txtColor = 'orange';
  styleClass='c3';
  contacts = [ 

      {
        'firstName':'ARC',
        'lastName':'Tutorials',
        'contactId':1234
      },
      
      {
        'firstName':'Prasanna',
        'lastName':'Bhalerao',
        'contactId':9922
      },
      
      {
        'firstName':'Yumna',
        'lastName':'Zaidi',
        'contactId':9933
      },
      {
        'firstName':'Prasanna',
        'lastName':'Bhalerao',
        'contactId':9922
      },
      
      {
        'firstName':'Yumna',
        'lastName':'Zaidi',
        'contactId':9933
      },
      {
        'firstName':'Prasanna',
        'lastName':'Bhalerao',
        'contactId':9922
      },
      
      {
        'firstName':'Yumna',
        'lastName':'Zaidi',
        'contactId':9933
      },



  ]
  


}
