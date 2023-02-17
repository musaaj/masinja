//Force this app to portrait mode.
cfg.Portrait

//Include scripts for each page.
include("Home.js")
include("Settings.js")

//Main class for the app
class Main extends App
{
   //Called when app starts.
   onStart()
   {
      //Add main layout.
      this.layMain = ui.addLayout("main", "Linear",
         "vcenter,fillxy")

      //Create app bar and menu drawer.
      this.createBar()

      //Create page objects.
      this.home = new Home(this)
      this.settings = new Settings(this)

      //Create layout for pages and load home page.
      this.layPage = ui.addLayout(this.layMain, "frame", "", 1,
         0.8)
      this.home.show()
      this.createBottomNav()
   }

   //Show a given page inside the page layout.
   showPage(name)
   {
      //Hide all pages.
      this.home.hide()
      this.settings.hide()

      //Show chosen page.
      switch(name)
      {
         case "Home":
            this.home.show();
            break
         case "Settings":
            this.settings.show();
            break
      }
   }

   //Create a title bar with a menu icon.
   createBar()
   {
      //Add app bar.
      this.bar = ui.addAppBar(this.layMain, "Texter", "Secondary",
         1)
      this.bar.setOnMenu(() =>
      {
      })
   }

   createBottomNav()
   {
      const navs = [
         ["Home", "home"],
         ["Contacts", "persons"],
         ["Account", "money"]
      ]
      this.bottomNav = ui.addBottomNavbar(this.layMain, navs, "", 1)
      this.bottomNav.setOnChange((title, index)=>
      {
        this.showPage( title );
      });
   }
}