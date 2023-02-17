
//Class to create/show the home page
class Home extends AppObject
{
    constructor( main )
    {
        super()
        this.main = main
        this.lay = null
    }

    show()
    {
        //If layout not created yet.
        if( !this.lay )
        {
            //Create the layout.
            this.lay = ui.addLayout( this.main.layPage, "linear",  "fillxy,vcenter" )
            this.lay.setChildMargins( .02, .02, .02, .01 )

            //Add icon
            this.txtIcon = ui.addText( this.lay, "home", "Primary,Icon")
            this.txtIcon.setScale( 4,4 )

            //Add some text.
            var text = "This is your <strong>home page</strong>."
            this.txtHome = ui.addText( this.lay, text, "Multiline,Html" )
            this.txtHome.textSize = "1.2em"
        }

        //Show the page.
        this.lay.show()
    }

    hide()
    {
        if( this.lay ) this.lay.hide()
    }
}