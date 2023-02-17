cfg.Portrait;
include('Home.js');
include('Contacts.js');
include('Account.js');


class Main extends App
{
   onStart()
   {
      this.layMain = ui.addLayout('main', 'Linear',
         'vcenter,fillxy');
      this.createBar();
      this.createBottomNav();
      this.home = new Home(this);
      this.contacts = new Contacts(this);
      this.account  = new Account(this);
      this.layPage = ui.addLayout(this.layMain, 'frame', '', 1,
         0.8)
      this.home.show();
      this.pages = [
         this.home,
         this.contacts,
         this.account
      ];
   }

   showPage(index)
   {
      this.pages.forEach((page, idx) =>
      {
         page.hide()
      })
      this.pages[index].show()
   }

   createBar()
   {
      this.bar = ui.addAppBar(this.layMain, 'Texter', 'Primary',
         1);
   }

   createBottomNav()
   {
      const navs = [
         ['Home', 'home'],
         ['Contacts', 'persons'],
         ['Account', 'money']
      ]
      this.bottomNav = ui.addBottomNavbar(this.layMain, navs, '',
         1)
      this.bottomNav.setOnChange((title, index) =>
      {
         this.showPage(index);
      });
   }
}