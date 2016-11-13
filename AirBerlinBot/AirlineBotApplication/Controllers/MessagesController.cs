using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.FormFlow;
using System.Net.Http;
using System.Web.Http.Description;
namespace MyFirstBOTApplication
{
    public class MessagesController : ApiController
    {
        internal static IDialog<AirBerlinHack> BuildInsuranceDialog()
        {
            return Chain.From(() => FormDialog.FromForm(AirBerlinHack.BuildForm));
        }


        [ResponseType(typeof(void))]
        public virtual async Task<HttpResponseMessage> Post([FromBody] Activity activity)
        {
            await Conversation.SendAsync(activity, BuildInsuranceDialog);
            return new HttpResponseMessage(System.Net.HttpStatusCode.Accepted);
        }
    }
}