using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Service
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            BindDropDownListFromXML();
        }
        public void BindDropDownListFromXML()
        {
            DataSet ds = new DataSet();
            try
            {
                //Reading the data from the XML file
                ds.ReadXml(MapPath("~/serviceList.xml"));
                DataView dv = ds.Tables[0].DefaultView;
                //Sort the DataView by id 
                dv.Sort = "ID";
                //Setting DataText field and DataValue field of DropDownList 
                ddlService.DataTextField = "Name";
                ddlService.DataValueField = "ID";
                //Binding the DropDownList with the  DataView 
                ddlService.DataSource = dv;
                ddlService.DataBind();

                ddlService.Items.Insert(0, new ListItem("-- Select --", "0"));
                ddlOperation.Items.Insert(0, new ListItem("-- Select Service first--", "0"));
                ddlSamples.Items.Insert(0, new ListItem("--Select Service first --", "0"));
            }
            catch (Exception ex)
            {
                Response.Write(ex.Message.ToString());
            }
        }
    }
}