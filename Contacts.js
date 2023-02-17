class Contacts extends AppObject
{
  constructor(main)
  {
    super();
    this.main  = main;
    this.lay = null;
  }
  
  show()
  {
    console.log(9);
  }
  
  hide()
  {
    console.log(8);
  }
}