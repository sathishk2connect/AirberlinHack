using System;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.FormFlow;
#pragma warning disable 649
namespace MyFirstBOTApplication
{
    public enum LossTypeOptions
    { 
        Stolen=1,
        Accident,
        NaturalCalamity
    }  
    [Serializable]
    public class AirBerlinHack
    {
        [Prompt("Please give us your airline pnr number")]
        public string pnrnumber;

        [Prompt("Thanks for the details, how may we assist you?")]
        public string assist;

        [Prompt("Please provide your pick up address")]
        public string pickup;

        [Prompt("Thanks for giving the address.Please provide the date and time for pick up(DD/MM/YY,HH:MM)")]
        public string pickupadrs;
        
        [Prompt("Thanks, Your slot has been booked. Our collection officials will visit your residence at the scheduled time.They will do the security and weight check of your baggage.Please login to Ezboard App to track your baggage.")]
        public string assistbaggage;

        [Prompt("You get good Indian food in terminal 3. If you prefer Mexican, then try it at terminal 2.")]
        public string gtFood;

        [Prompt("Your boarding terminal is Terminal 2.")]
        //public LossTypeOptions LossType;
        public string bdng;

        [Prompt("Not to worry buddy :) We have a facility which is exclusive only on Air berlin to pre order food and we would deliver it to you on flight.What would you like to order ? ")]
        public string assistfinal;

        [Prompt("Sure, Your order is taken. Anything else that I can assist you with?")]
        public string assisting;




        //[Prompt("When did this happen")]
        //public DateTime? LossDate;

        //[Prompt("Where did this happen")]
        //public string WhereDidThisHappen;

        //[Prompt("How this happened in detail")]
        //public string LossDetail;

        public static IForm<AirBerlinHack> BuildForm()
        {
            OnCompletionAsyncDelegate<AirBerlinHack> wrapUpRequest = async (context, state) =>
            {
                string wrapUpMessage=
"Thank you for contacting us. Your baggage will be picked on the scheduled time and you food order '" + state.assistfinal + "' will be delivered to you when you are on place. We wish you a safe and enjoyable trip.";
          
                await context.PostAsync(wrapUpMessage);

            };
            return new FormBuilder<AirBerlinHack>().Message("Welcome to Air Berlin")
                .Field(nameof(pnrnumber))
                .Field(nameof(assist))
                .Field(nameof(pickup))
                .Field(nameof(pickupadrs))
                .Field(nameof(assistbaggage))
                .Field(nameof(gtFood))
                .Field(nameof(bdng))
                .Field(nameof(assistfinal))
                .Field(nameof(assisting))
                //.Field(nameof(LossType))
                //.Field(nameof(LossDate))
                //.Field(nameof(WhereDidThisHappen))
                //.Field(nameof(LossDetail))
                .OnCompletion(wrapUpRequest)
                .Build();
        }
    }
}