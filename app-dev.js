<!DOCTYPE html>
<html lang='en'>
<head>
  <!-- Meta -->
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <!--meta name='description' content='Wriggle Worm Gear Design App'>
  <meta name='author' content=''>
  <meta name='keywords' content='Worm, Gear, Wriggle'-->
  <!--End of Meta-->
  <!--Title-->
  <title>WormCAD | Worm Gear Design App</title>
  <!--End of Title-->
  <!--External Top Scripts-->
  <script src='assets/js/jquery-1.11.2.min.js'></script>
  <!--End of External Top Scripts-->
  <!--Internal Top Scripts-->

  <!--End of Internal Top Scripts-->
  <!-- External Css -->
  <link href='assets/css/bootstrap.min.css' rel='stylesheet'>
  <link href='assets/css/font-awesome.min.css' rel='stylesheet'>
  <link href='assets/css/animate.min.css' rel='stylesheet'>
  <link href='assets/css/owl.carousel.css' rel='stylesheet'>
  <link rel='stylesheet' href='assets/css/prettyPhoto.css' type='text/css' media='screen' charset='utf-8' />
  <link href='assets/css/chuksy.css' rel='stylesheet'>
  <link href='assets/css/main.css' rel='stylesheet'>
  <!--End of External CSS -->
  <style>
    body
    {
      -webkit-user-select: none;
      padding: 0px;
      margin: 0px;
      /*min-height:700px;*/
      height:100%;
      cursor:default;
      overflow-x: hidden;
    }
    .vmemb
    {

      max-width:inherit;
      max-height:500px;
      -webkit-user-select: initial;
    }
    .vmemb-table td, .vmemb-table th, .vmemb-table tr
    {
     vertical-align: middle;
   }

   .vmemb-table thead
   {

   }
   .vmemb-table th
   {
     text-align: center;
   }
   .vmemb-cent
   {
    text-align: center;
  }
  .vmemb-but .fa
  {
    font-size: 20px;
  }
  .vmemb-but
  {
    border:none;
    padding:0px;
    margin-top: 3px;
  }
  .vmemb-check
  {
    width:25px;
    height: 20px;
  }
</style>

<script>
//$(document).ready(function()
//{

  // Converts from degrees to radians.
  Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
  
  // Converts from radians to degrees.
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };

  function init_page()
  {




    $('.wmaterial').val();
    $('.wasstrength').val();
    $('.wfestrength').val();
    $('.wtoothform').val();
    $('.wshearstress').val();
    $('.wwormspeed').val();
    $('.wspeedreduction').val();
    $('.wpowertransmitted').val();
    $('.wdistancebtwshaft').val();
    $('.wnumberofstarts').val();
    $('.wvibrationallowance').val();
    $('.gmaterial').val();
    $('.gasstrength').val();
    $('.gfestrength').val();
    $('.gloadstress').val();
    $('.gshearstress').val();
    $('.goverloadallowed').val();

    //var ppp = Math.degrees(Math.atan(Math.pow((1/12),(1/3))));
    //alert(ppp);



    $('.dwleadangle').val(Math.degrees(Math.atan(Math.pow(1/parseFloat($('.wspeedreduction').val()),(1/3)))));
    $('.dwnormallead').val(2*Math.PI*parseFloat($('.wdistancebtwshaft').val())*Math.sin(Math.radians(parseFloat($('.dwleadangle').val()))*Math.cos(Math.radians(parseFloat($('.dwleadangle').val()))))/(Math.cos(Math.radians(parseFloat($('.dwleadangle').val())))+(parseFloat($('.wspeedreduction').val())*(Math.sin(Math.radians(parseFloat($('.dwleadangle').val())))))));
    $('.dwaxiallead').val(parseFloat($('.dwnormallead').val())/Math.cos(Math.radians(parseFloat($('.dwleadangle').val()))));
    $('.dwaxialpitch').val(parseFloat($('.dwaxiallead').val())/4);
    $('.dwcalculatedmodule').val(parseFloat($('.dwaxialpitch').val())/Math.PI);
    $('.dwstandardmodule').val(Math.round(parseFloat($('.dwcalculatedmodule').val())));
    $('.dwactualaxialpitch').val(Math.PI*parseFloat($('.dwstandardmodule').val()));
    $('.dwactualaxiallead').val(parseFloat($('.dwactualaxialpitch').val())*parseFloat($('.wnumberofstarts').val()));
    $('.dwactualnormallead').val(parseFloat($('.dwactualaxiallead').val())*Math.cos(Math.radians(parseFloat($('.dwleadangle').val()))));
    $('.dwacualdistancebtwshaft').val((parseFloat($('.dwactualnormallead').val())*(Math.cos(Math.radians(parseFloat($('.dwleadangle').val())))+(parseFloat($('.wspeedreduction').val())*Math.sin(Math.radians(parseFloat($('.dwleadangle').val()))))))/(2*Math.PI*Math.sin(Math.radians(parseFloat($('.dwleadangle').val())))*Math.cos(Math.radians(parseFloat($('.dwleadangle').val())))));
    $('.dwpitchcirclediameter').val(parseFloat($('.dwactualaxiallead').val())/(Math.PI*Math.tan(Math.radians(parseFloat($('.dwleadangle').val())))));
    $('.dwteethnumber').val(parseFloat($('.wspeedreduction').val())*parseFloat($('.wnumberofstarts').val()));
    $('.dwwormlength').val(parseFloat($('.dwactualaxialpitch').val())*(4.5+(0.02*parseFloat($('.wnumberofstarts').val()))));
    $('.dwmodifiedfacelength').val(parseFloat($('.dwwormlength').val())+parseFloat($('.wvibrationallowance').val()));
    if(parseFloat($('.wnumberofstarts').val())<=2) { $('.dwtoothdepth').val(0.686*parseFloat($('.dwactualaxialpitch').val())); } else { $('.dwtoothdepth').val(0.623*parseFloat($('.dwactualaxialpitch').val())); }
    if(parseFloat($('.wnumberofstarts').val())<=2) { $('.dwaddendum').val(0.318*parseFloat($('.dwactualaxialpitch').val())); } else { $('.dwaddendum').val(0.286*parseFloat($('.dwactualaxialpitch').val())); }
    $('.dwwormoutsidediameter').val(parseFloat($('.dwpitchcirclediameter').val())+(2*parseFloat($('.dwaddendum').val())));
    $('.dgpitchcirclediameter').val(parseFloat($('.dwstandardmodule').val())*parseFloat($('.dwteethnumber').val()));
    if(parseFloat($('.wnumberofstarts').val())<=2) { $('.dgoutsidediameter').val(parseFloat($('.dgpitchcirclediameter').val())+(1.0135*parseFloat($('.dwactualaxialpitch').val()))); } else { $('.dgoutsidediameter').val(parseFloat($('.dgpitchcirclediameter').val())+(0.8903*parseFloat($('.dwactualaxialpitch').val()))); }
    if(parseFloat($('.wnumberofstarts').val())<=2) { $('.dgthroatdiameter').val(parseFloat($('.dgpitchcirclediameter').val())+(0.636*parseFloat($('.dwactualaxialpitch').val()))); } else { $('.dgthroatdiameter').val(parseFloat($('.dgpitchcirclediameter').val())+(0.572*parseFloat($('.dwactualaxialpitch').val()))); }
    if(parseFloat($('.wnumberofstarts').val())<=2) { $('.dgfacewidth').val(6.5+(2.38*parseFloat($('.dwactualaxialpitch').val()))); } else { $('.dgfacewidth').val(5+(2.15*parseFloat($('.dwactualaxialpitch').val()))); }



    $('.rwormgearspeed').val(parseFloat($('.wwormspeed').val())/parseFloat($('.wspeedreduction').val()));
    $('.rtorquetransmitted').val((parseFloat($('.wpowertransmitted').val())*60)/(2*Math.PI*parseFloat($('.rwormgearspeed').val())));
    $('.rgeartangentialload').val((2*parseFloat($('.rtorquetransmitted').val()))/(parseFloat($('.dgpitchcirclediameter').val())*0.001));
    $('.rgearpitchlinevelocity').val((Math.PI*parseFloat($('.dgpitchcirclediameter').val())*0.001*parseFloat($('.rwormgearspeed').val()))/60);
    $('.rvelocityfactor').val(6/(6+parseFloat($('.rgearpitchlinevelocity').val())));
    if(parseFloat($('.wtoothform').val())==20) { $('.rtoothformfactor').val(0.154-(0.912/parseFloat($('.dwteethnumber').val()))); } else { $('.rtoothformfactor').val(0.124-(0.684/parseFloat($('.dwteethnumber').val()))); }
    $('.rdesignedtangentialload').val(parseFloat($('.gasstrength').val())*parseFloat($('.rvelocityfactor').val())*parseFloat($('.dgfacewidth').val())*Math.PI*parseFloat($('.dwstandardmodule').val())*parseFloat($('.rtoothformfactor').val()));
    //Tangential Load Remark
    $('.rdynamicload').val(parseFloat($('.rdesignedtangentialload').val())/parseFloat($('.rvelocityfactor').val()));
    //Dynamic Load Remark
    $('.rstaticload').val(parseFloat($('.gfestrength').val())*parseFloat($('.dgfacewidth').val())*Math.PI*parseFloat($('.dwstandardmodule').val())*parseFloat($('.rtoothformfactor').val()));
    //Static Load Remark
    $('.rrubbingvelocity').val((Math.PI*parseFloat($('.dwpitchcirclediameter').val())*0.001*parseFloat($('.wwormspeed').val()))/Math.cos(Math.radians(parseFloat($('.dwleadangle').val()))));
    $('.rfrictioncofficient').val(0.025+(parseFloat($('.rrubbingvelocity').val())/18000));
    $('.rfrictionangle').val(Math.degrees(Math.atan(parseFloat($('.rfrictioncofficient').val()))));
    $('.refficiency').val((Math.tan(Math.radians(parseFloat($('.dwleadangle').val()))))/Math.tan(Math.radians(parseFloat($('.dwleadangle').val())+parseFloat($('.rfrictionangle').val()))));
    $('.rheatgenerated').val(parseFloat($('.wpowertransmitted').val())*(1+(25/100))*(1-parseFloat($('.refficiency').val())));
    $('.rtotalarea').val((((Math.PI*Math.pow(parseFloat($('.dwpitchcirclediameter').val()),2))/4)+((Math.PI*Math.pow(parseFloat($('.dgpitchcirclediameter').val()),2))/4))*0.000001);
    $('.rtemperature').val(parseFloat($('.rheatgenerated').val())/(parseFloat($('.rtotalarea').val())*378));
    //Heat Disipation Remark
    $('.rmaximumload').val(parseFloat($('.dgpitchcirclediameter').val())*parseFloat($('.dgfacewidth').val())*parseFloat($('.gloadstress').val()));
    //Wear Remark


    if(parseFloat($('.rdesignedtangentialload').val())>(parseFloat($('.rgeartangentialload').val()))) { $('.retangentialload').html("<b class = 'align-center text-success'> Safe Design for Tangential Load </b>"); } else { $('.retangentialload').html("<b class = 'align-center text-warning'> Unsafe Design for Tangential Load </b>"); }

    if(parseFloat($('.rdynamicload').val())>(parseFloat($('.rgeartangentialload').val()))) { $('.redynamicload').html("<b class = 'align-center text-success'> Safe Design for Dynamic Load </b>"); } else { $('.redynamicload').html("<b class = 'align-center text-warning'> Unsafe Design for Dynamic Load </b>"); }

    if(parseFloat($('.rstaticload').val())>(parseFloat($('.rgeartangentialload').val()))) { $('.restaticload').html("<b class = 'align-center text-success'> Safe Design for Static Load </b>"); } else { $('.restaticload').html("<b class = 'align-center text-warning'> Unsafe Design for Static Load </b>"); }

    if(parseFloat($('.rtemperature').val())<(38)) { $('.reheatdissipation').html("<b class = 'align-center text-success'> Safe Design for Heat Dissipation </b>"); } else { $('.reheatdissipation').html("<b class = 'align-center text-warning'> Unsafe Design for Heat Dissipation </b>"); }

    if(parseFloat($('.rmaximumload').val())>(parseFloat($('.rgeartangentialload').val()))) { $('.rewear').html("<b class = 'align-center text-success'> Safe Design for Wear </b>"); } else { $('.rewear').html("<b class = 'align-center text-warning'> Unsafe Design for Wear </b>"); }
  }



//});

function page_switch(page, thiss)
{
 if(page == 'A')
 {
   $('.tab').removeClass('active');
   $(thiss).parents('.tab').addClass('active');
   $('.page').hide();
   $('.page-welcome').show();
 }
 else if(page == 'B')
 {
   $('.tab').removeClass('active');
   $(thiss).parents('.tab').addClass('active');
   $('.page').hide();
   $('.page-design-parameters').show();

 }
 else if(page == 'C')
 {
  init_page();
  $('.tab').removeClass('active');
  $(thiss).parents('.tab').addClass('active');
  $('.page').hide();
  $('.page-dimensions').show();

}
else if(page == 'D')
{
  $('.tab').removeClass('active');
  $(thiss).parents('.tab').addClass('active');
  $('.page').hide();
  $('.page-design-report').show();

}
}

function continuetoapp()
{
  $('.pga').remove();
  $('ul, main').show();
}
function materialselect()
{
  var wm = $('.gmaterial').val();
  var gm = $('.wmaterial').val();
  if(gm == 'A' && wm == 'A')
  {
    $('.gloadstress').val(0.415);
  }
  else if(gm == 'B' && wm == 'B')
  {
    $('.gloadstress').val(0.345);
  }
  else if(gm == 'B' && wm == 'A')
  {
    $('.gloadstress').val(0.550);
  }
  else if(gm == 'B' && wm == 'C')
  {
    $('.gloadstress').val(0.830);
  }
  else if(gm == 'B' && wm == 'D')
  {
    $('.gloadstress').val(0.830);
  }
  else if(gm == 'C' && wm == 'A')
  {
    $('.gloadstress').val(1.035);
  }
  
}

</script>
</head>

<body id='home'>
  <div class = 'containter pga'>

    <div class="jumbotron container" style= "margin-top:50px; background:url('assets/images/gearb.jpg'); background-size: contain; background-repeat:repeat; color:black; text-shadow: 2px 2px #FFFFFF;">

      <h1 class = 'text-center'><b>WormCAD 2016</b></h1>
      <p class = 'text-center'><b>a project by</b></p>
      <p class = 'text-center'><b> Dike Ogagaoghene &amp; Ifediba Chukwuemeka </b></p>
      <p class = 'row'>  <span class = 'col-sm-4 pull-left'> <span class = 'col-sm-4'> </span> <span style = 'border-bottom: 1px dashed #FFFFFF;' class = 'text-left'> <b>Supervisor </b> </span> </span>  <span class = 'col-sm-4 pull-right'> <span style = 'border-bottom: 1px dashed #FFFFFF;' class = 'text-right'> <b> Designed By </b></span> <span class = 'col-sm-4'> </span> </span> </p>
      <p class = 'row'>  <span class = 'col-sm-4 pull-left'> <span class = 'col-sm-4'> </span> <span  class = 'text-left'> <b> Engr. Agboola O. </b></span> </span>  <span class = 'col-sm-4 pull-right'> <span  class = 'text-right'><b> Chuksy </b></span> <span class = 'col-sm-4'> </span> </span> </p>
      <p><a class="btn btn-primary btn-lg pull-right" href="#" role="button" onclick="continuetoapp();">Continue</a></p>
    </div>
  </div>

  <ul class="nav nav-tabs" style = 'display:none;'>
    <li role="presentation" class="active tab"><a href="#" class = 'swdesign' onclick="page_switch('B', this);">Design Parameters</a></li>
    <li role="presentation" class="tab"><a href="#" class = 'swdimension' onclick="page_switch('C', this);">Dimensions</a></li>
    <li role="presentation" class="tab"><a href="#" class = 'swreport' onclick="page_switch('D', this);">Design Report</a></li>
  </ul>
  &nbsp;
  <main style = 'display:none;'>
    <div class = 'container-fluid'>

      <!--Gear Design Parameters-->
      <div class = 'page page-design-parameters'>
        <div class = 'row'>
          <form method = 'post' class = 'form gda'>

            <fieldset class = 'col-lg-6'>
              <legend>Worm Design:</legend>

              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Material: </label>
                <div class="col-lg-6">
                  <select class="form-control wmaterial input-sm" onchange="materialselect();" required>
                    <option  default> Select Material</option>
                    <option value = 'A'> Steel (B.H.N. 250)</option>
                    <option value = 'B'> Hardened Steel </option>
                    <option value = 'B'> Hardened Steel </option>
                    <option value = 'B'> Hardened Steel </option>
                    <option value = 'B'> Hardened Steel </option>
                    <option value = 'C'> Cast Iron </option>
                  </select>
                </div>
              </div>
              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Allowable Static Strength (Mpa)</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wasstrength input-sm" required>
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Flexural Endurance Strength</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wfestrength input-sm" required>
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Tooth Form (<sup>o</sup>)</label>
                <div class="col-lg-6">
                  <select class="form-control wtoothform input-sm" required>
                    <option  default> Select Toothform</option>
                    <option value = '14'> 14 </option>
                    <option value = '14.5'> 14.5 </option>
                    <option value = '20'> 20 </option>
                    <option value = '25'> 25 </option>
                    <option value = '30'> 30 </option>
                  </select>
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Shear Stress (Pa) </label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wshearstress input-sm" required >
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Worm Speed (rpm) </label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wwormspeed input-sm" required >
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Speed Reduction V/R</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wspeedreduction input-sm" required >
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Power Transmitted (W)</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wpowertransmitted input-sm" required >
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Dist. Btw. the Shaft (mm)</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wdistancebtwshaft input-sm" required >
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Number of Starts or Threads</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wnumberofstarts input-sm" required >
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Allowance for Vibration</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control wvibrationallowance input-sm" required >
                </div>
              </div>
            </fieldset>

            <fieldset class = 'col-lg-6'>
              <legend>Worm Gear Design:</legend>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Material: </label>
                <div class="col-lg-6">
                  <select class="form-control gmaterial input-sm" onchange= "materialselect();" required>
                    <option  default> Select Material</option>
                    <option value = 'A'> Phosporus Bronze </option>
                    <option value = 'B'> Cast Iron </option>
                    <option value = 'A'> Phosporus Bronze </option>
                    <option value = 'C'> Chilled Phosporus Bronze </option>
                    <option value = 'D'> Antimony Bronze </option>
                    <option value = 'A'> Phosporus Bronze </option>
                  </select>
                </div>
              </div>
              <br/>

              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Allowable Static Strength (Mpa)</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control gasstrength input-sm" required>
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Flexural Endurance Strength</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control gfestrength input-sm" required>
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Load Stress Factor K (N/mm<sup>2</sup>)</label>
                <div class="col-lg-6">
                  <input type="number" class="form-control gloadstress input-sm" required>
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Shear Stress (Pa) </label>
                <div class="col-lg-6">
                  <input type="number" class="form-control gshearstress input-sm" required>
                </div>
              </div>

              <br/>
              <div class="form-group">
                <label for="" class="col-lg-6 control-label">Overload Allowed </label>
                <div class="col-lg-6">
                  <input type="number" class="form-control goverloadallowed input-sm" required>
                </div>
              </div>

            </fieldset>
          </form>
        </div>
        <nav>
         <ul class="pager">
           <li><a href="#" onclick="page_switch('C', '.swdimension');">Next <i class = 'fa fa-arrow-right'></i> </a></li>
         </ul>
       </nav>


     </div>

   </div>
   <!-- End of Gear Design Parameters -->

   <!--Gear Dimensions-->
   <div class = 'page page-dimensions' style='display: none;'>
    <div class = 'row'>
      <form method = 'post' class = 'form gda'>

        <fieldset class = 'col-lg-6'>
          <legend>Design for Worm:</legend>

          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Lead Angle </label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwleadangle input-sm" required>
            </div>
          </div>
          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Normal Lead l<sub>N</sub></label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwnormallead input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Axial Lead l</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwaxiallead input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Axial Thread Pitch</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwaxialpitch input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Calculated Module m<sub>c</sub> </label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwcalculatedmodule input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Standard Module </label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwstandardmodule input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Actual Axial Thread Pitch P<sub>a</sub> (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwactualaxialpitch input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Actual Axial Lead (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwactualaxiallead input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label"> Actual Norm. Lead of Thread</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwactualnormallead input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Actual Dist. Btw. the Shaft (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwacualdistancebtwshaft input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Pitch Circle Diameter of Worm D<sub>w</sub> (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwpitchcirclediameter input-sm" required>
            </div>
          </div>

        </fieldset>

        <fieldset class = 'col-lg-6'>
          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Number of Teeth on the Worm D<sub>G</sub></label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwteethnumber input-sm" required>
            </div>
          </div>
          
          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Length of Worm L<sub>w</sub> (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwwormlength input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Modified Face Lengrh (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwmodifiedfacelength input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Depth of Tooth h (mm) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwtoothdepth input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Addendum a (mm) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwaddendum input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Worm Outside Diameter D<sub>OW</sub> (mm) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control dwwormoutsidediameter input-sm" required>
            </div>
          </div>

        </fieldset>

        <fieldset class = 'col-lg-6'>
          <legend>Design for Worm Gear:</legend>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Worm Gear Pitch Circle Diameter D<sub>G</sub> (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dgpitchcirclediameter input-sm" required>
            </div>
          </div>
          <br/>

          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Worm Gear Outside Diameter D<sub>OG</sub> (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dgoutsidediameter input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Worm Gear Throat Diameter D<sub>T</sub> (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dgthroatdiameter input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Face Width b (mm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control dgfacewidth input-sm" required>
            </div>
          </div>

        </fieldset>
      </form>
    </div>

    <nav>
     <ul class="pager">
       <li><a href="#" onclick="page_switch('B', '.swdesign');"> <i class = 'fa fa-arrow-left'></i> Previous </a></li>
       <li><a href="#" onclick="page_switch('D', '.swreport');">Next <i class = 'fa fa-arrow-right'></i> </a> </li>
     </ul>
   </nav>


 </div>


</div>

<!-- End of Gear Dimensions -->

<!--Gear Report-->
<div class = 'page page-design-report' style='display: none;'>
  <div class = 'row'>
    <form method = 'post' class = 'form gda'>

      <div class = 'col-lg-6'>
        <fieldset class = ''>
          <legend>Tangential Load:</legend>

          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Worm Gear Speed N<sub>G</sub> rpm </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rwormgearspeed input-sm" required>
            </div>
          </div>
          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Torque Transmitted T (Nm)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control rtorquetransmitted input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Gear Tangential Load W<sub>T</sub> (N)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control rgeartangentialload input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Worm Gear PitchLine Velocity v (m/s)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control rgearpitchlinevelocity input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Velocity Factor C<sub>v</sub> </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rvelocityfactor input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Tooth Form Factor y </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rtoothformfactor input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Designed Tangential Load W<sub>DT</sub> (N)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control rdesignedtangentialload input-sm" required>
            </div>
          </div>
          <br/>
          <div class = 'col-sm-2'> </div> <div class='well well-sm col-sm-8 retangentialload'> <b class = 'align-center text-success'> Tangential Load Report </b> </div> <div class = 'col-sm-2'> </div>
        </fieldset>

        <fieldset class = ''>

          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Dynamic Load W<sub>D</sub> (N) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rdynamicload input-sm" required>
            </div>
          </div>
          <br/>
          <div class = 'col-sm-2'> </div> <div class='well well-sm col-sm-8 redynamicload'> <b class = 'align-center text-success'> Dynamic Load Report </b> </div> <div class = 'col-sm-2'> </div>
        </fieldset>

        <fieldset class = ''>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Static Load/Endurance Strength W<sub>S</sub> (N) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rstaticload input-sm" required>
            </div>
          </div>
          <br/>
          <div class = 'col-sm-2'> </div> <div class='well well-sm col-sm-8 restaticload'> <b class = 'align-center text-success'> Static Load Report </b> </div> <div class = 'col-sm-2'> </div>
        </fieldset>
      </div>


      <div class = 'col-lg-6'>
        <fieldset class = ''>
          <legend>Heat Dissipation:</legend>

          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Rubbing Velocity V<sub>r</sub> (m/min) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rrubbingvelocity input-sm" required>
            </div>
          </div>
          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Coefficient of Friction &mu; </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rfrictioncofficient input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Angle of Friction &Phi; </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rfrictionangle input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Efficiency </label>
            <div class="col-lg-6">
              <input type="number" class="form-control refficiency input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Overload Heat Generated </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rheatgenerated input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Worm &amp; Worm Gear Total Area A(mm<sup>2</sup>) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rtotalarea input-sm" required>
            </div>
          </div>

          <br/>
          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Tempature T (<sup>o</sup>C)</label>
            <div class="col-lg-6">
              <input type="number" class="form-control rtemperature input-sm" required>
            </div>
          </div>
          <br/>
          <div class = 'col-sm-2'> </div> <div class='well well-sm col-sm-8 reheatdissipation'> <b class = 'align-center text-success'> Heat Dissipation Report </b> </div> <div class = 'col-sm-2'> </div>
        </fieldset>

        <fieldset class = ''>

          <div class="form-group">
            <label for="" class="col-lg-6 control-label">Maximum Load for Wear W<sub>W</sub> (N) </label>
            <div class="col-lg-6">
              <input type="number" class="form-control rmaximumload input-sm" required>
            </div>
          </div>
          <br/>
          <div class = 'col-sm-2'> </div> <div class='well well-sm col-sm-8 rewear'> <b class = 'align-center text-success'> Report for Wear </b> </div> <div class = 'col-sm-2'> </div>
        </fieldset>
      </div>
    </form>
  </div>

  <nav>
   <ul class="pager">
     <li><a href="#" onclick="page_switch('C', '.swdimension');"> <i class = 'fa fa-arrow-left'></i> Previous </a></li>
   </ul>
 </nav>


</div>

</div>
<!-- End of Gear Dimensions -->

</div>
</main>

<!--External Bottom Scripts-->
<script src='assets/js/bootstrap.min.js'></script>
<!--End of External Bottom Scripts-->
<!--Internal Bottom Scripts-->

<!--End of Internal Bottom Scripts-->

</body>
</html>
