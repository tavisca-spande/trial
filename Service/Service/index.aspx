<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Service.index" %>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="/services.js">
   
</script>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="margin-left: 200px;">

            <asp:RadioButton ID="rbLogin" GroupName="login" runat="server" Font-Bold="True" Text="Login" Style="margin-left:10px"/>
            <asp:Button ID="btnLogin" runat="server" Text="Login" Style="margin-left:30px" Width="78px"/>

            &nbsp;&nbsp; &nbsp;&nbsp;

            <asp:Label ID="lblLoginStatus" runat="server"  Text="Login Successful" Visible="False" ForeColor="Red"></asp:Label>

            <asp:RadioButton ID="rbToken" GroupName="login" runat="server" Font-Bold="True" Text="Token" Style="margin-left:100px" />

            <asp:TextBox ID="TextBox1" runat="server" Style="margin-left: 20px"></asp:TextBox>

        </div>
        <div style="margin-left: 200px">
            <asp:Label ID="lblSvc" runat="server" Text="SVC : " Font-Bold="True"></asp:Label>
            <asp:DropDownList ID="ddlService" runat="server" Height="35px" Style="margin-left: 59px; margin-top: 20px" TabIndex="1">
            </asp:DropDownList>
            <br />
        </div>
        <div style="margin-left: 200px">
            <asp:Label ID="lblOperation" runat="server" Text="Operation : " Font-Bold="True"></asp:Label>
            <asp:DropDownList ID="ddlOperation" runat="server" Height="28px" Style="margin-left: 29px; margin-top: 20px" TabIndex="1">
            </asp:DropDownList>
        </div>
        <div style="margin-left: 200px">
            <asp:Label ID="lblSample" runat="server" Text="Samples : " Font-Bold="True"></asp:Label>
            <asp:DropDownList ID="ddlSamples" runat="server" Height="28px" Style="margin-left: 39px; margin-top: 20px" TabIndex="1">
            </asp:DropDownList>
        </div>
        <div>

            <div style="margin-left: 180px">
                <br />
                <asp:Label ID="lblUrl" runat="server" Text="URL :" Font-Bold="True"></asp:Label>
                <asp:TextBox ID="tbUrl" runat="server" Style="margin-left: 66px" Width="438px" TextMode="Url"></asp:TextBox>
                <br />
            </div>
            <br />
            <asp:TextBox ID="tbRequestXml" runat="server" Height="198px" Style="margin-left: 184px" TextMode="MultiLine" Width="316px"></asp:TextBox>
            <asp:Button ID="btnPost" runat="server" Height="23px" Style="margin-left: 91px; margin-top: 0px" Text="Post" Width="73px" />
            <asp:TextBox ID="tbResponseXml" runat="server" Height="199px" Style="margin-left: 46px; margin-top: 0px;" TextMode="MultiLine" Width="359px"></asp:TextBox>
            <br />

        </div>
    </form>
</body>
</html>
