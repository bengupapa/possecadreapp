using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PosseCadre.Managers.CustomHtmlHelper
{
    public static class AppCustomHtmlHelpers
    {
        public static IHtmlString Image(this HtmlHelper helper, string ImageName, string CssClassName) {

            string location = "~/Resources/" + ImageName;

            TagBuilder tag = new TagBuilder("img");
            tag.Attributes.Add("src", VirtualPathUtility.ToAbsolute(location));
            tag.AddCssClass(CssClassName);
            return new MvcHtmlString(tag.ToString(TagRenderMode.SelfClosing));
        }
    }
}