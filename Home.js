class Home extends AppObject
{
   constructor(main)
   {
      super();
      this.main = main;
      this.lay  = null;
   }

   show()
   {
    this.lay = ui.addLayout(this.main.layPage, "linear",
         "fillxy,Top")
      this.lay.setChildMargins(.02, .02, .02, .01);
      this.recipients = ui.addTextField(this.lay, "",
        "outlined", 0.9);
      this.recipients.hint = 'To';
      this.msgBox = ui.addTextField(this.lay, "",
         "Multiline, Outlined, Center", 0.9);
      this.msgBox.hint = 'Type here';
      this.msgBox.setRows(10);
      this.sendBtn = ui.addButton(this.lay, "Send",
        "Primary", 0.9);
      this.sendBtn.sizeVariant  = 'Large';
      this.sendBtn.textSize = '14pt';
      this.lay.show()
   }

   hide()
   {
      this.lay.hide()
   }
}