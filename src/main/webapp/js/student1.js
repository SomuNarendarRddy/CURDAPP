$(function(){
	
	$("#dob1").datepicker({
		changeDate : true,
		changeMonth : true,
		changeYear : true,
		yearRange: "-50:+0",
		showButtonPanel : false,
// 		minDate: '-50Y',
	    maxDate: '0', 
		dateFormat : 'dd-MM-yy'
	});
	
	$("#totalFee").val("");
	$("#discountFee1").val("");
	/*$('input[type=file]').change(function () 
	{
		var val = $(this).val().toLowerCase();
		var regex = new RegExp("(.*?)\.(png|jpg)$");
 		if(!(regex.test(val))) 
 		{
			$(this).val('');
			$('#blah').attr('src','upload/default.png');
			alert('Please Select .png or .jpg format only..!');
		} 
 	});*/

	/*$('#student-form').submit(function()
			 {
			    $("input[type='submit']", this)
			      .val("Please Wait...")
			      .attr('disabled', 'disabled');
			 
			    return true;
			  });*/

	
	jQuery.validator.addMethod('lettersonly', function(value, element) {
	    return this.optional(element) || /^[a-z. áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
	}, "Please Enter Valid Name");

	   jQuery.validator.addMethod("mobileNO", function(phone_number, element) {
	   phone_number = phone_number.replace(/\s+/g, ""); 
	 return this.optional(element) || phone_number.length > 9 &&
	   phone_number.match(/^[7-9]\d+$/);
	}, "Invalid Mobile Number");


	    $("#student-form").validate({
	    errorElement: 'span',
	    errorClass: 'has-error',
		rules:
		{
		    name:{required:	true, lettersonly: true},
		    boardName:{required: true},
		    medium:{required: true},
		    className:{required: true},  
		    section:{required: true},
		    totalFee: {required: true, number: true},
		    discountFee1: {number: true},
//	 	    rollNum:{required: true},
		    admissionNum:{required: true},
		    fatherName:{required: true, lettersonly: true},
		    mobile:{required: true, number: true, mobileNO: true, minlength: 10, maxlength: 10},
		    altmobile:{number: true, mobileNO: true, minlength: 10, maxlength: 10},
		    email:{email: true},
		    gender:{required: true},
		    dob1:{required: true},
		    address:{required: true},
		    fee:{required: true},
		    previousInstitue:{lettersonly: true},
//		    fileImage:{extension: "png|jpg"},
		    email:{email: true},
	/*	    bgroup:{required: true},
		    religion:{required: true},
		    caste:{required: true},
		    acomitation:{required: true},
		    buspesility:{required: true},
		    busroute:{required: true}, */
	    },
		messages:
		{
		    name:{required: 'Please Enter Name'},
		    boardName:{required: 'Please Select Board'},
		    medium:{required: 'Please Choose Medium'},
		    className:{required: 'Please Choose Class'},
		    section:{required: 'Please Choose Section'},
		    totalFee: {required: 'Please Choose Fees'},
		    discountFee1: {number: 'Please Enter Discount Fee Amount (Eg: 1000,1500 etc.,)'},
//	 	    rollNum:{required: 'Please Enter Roll Number'},
		    admissionNum:{required: 'Please Enter Admission Number'},
		    fatherName:{required: 'Please Enter Father Name'},
		    gender:{required: 'Please Choose Gender'},
		    dob1:{required: 'Please Enter Date Of Birth'},
		    mobile:{required: 'Please Enter Mobile Number', number: 'Please Enter 10 digit mobile number'},
		    address:{required: 'Please Enter Address'},
		    fee:{required: 'Please Enter Fee Amount'},
		    altmobile:{number: 'Please Enter only numbers'},
		    email:{email: 'Please Enter Valid Email'},
		    previousInstitue:{lettersonly: 'Please Enter Previous Institute Name'},
//		    fileImage:{extension: 'Please Choose Only .png or .jpg'},
	/* 		bgroup:{required: 'Please Enter Blood Group'},
		    religion:{required: 'Please Choose Religion'},
		    caste:{required: 'Please Choose Caste'},
		    acomitation:{required: 'Please Choose Accomodation'},
		    buspesility:{required: 'Please Choose Bus Facility'},  
		    busroute:{required: 'Please Enter Bus route'}, */        
	    },
	    errorPlacement: function(error, element){
	      if(element.attr("name") == "gender")
	        error.insertAfter(".gender_error").css("color", "red");
	      else if(element.attr("name") == "accomodation")
	        error.insertAfter(".accomodation_error").css("color", "red"); 
	      else if(element.attr("name") == "dob1")
	        error.insertAfter(".dob1_error").css("color","red");   
	      else if(element.attr("name") == "busroute")
	        error.insertAfter(".busroute_error").css("color","red");
	      else if(element.attr("name") == "busfacility")
	        error.insertAfter(".busfacility_error").css("color","red"); 
	      else if(element.attr("name") == "fileImaged")
	        error.insertAfter(".fileImaged_error").css("color","red");          
	       else if(element.attr("name") == "fileImage")
	        error.insertAfter(".fileImage-error").css("color","red");  
	      else
	        error.insertAfter(element);
	      }
	});
	    

	$('#cancel').click(function () {
	   	$('#fileImage').val("");      //image will be cleared if selected
	   	$('#blah').attr("src","upload/default.png");
	  	$("#student-form").validate().resetForm();
	    $("#student-form").removeClass("has-error");
	    $('#name').val("");
	    $('#boardName').val("");
	    $('#medium').val("");
	    $('#className').val("");
	    $('#section').val("");
	    $('#dob1').val("");
	    $('#rollNum').val("");
	    $('#admissionNum').val("");
	    $('#fatherName').val("");
	    $('#mobile').val("");
	    $('#altmobile').val("");
	    $('#email').val("");
	    $('#blodgroup').val("");
	    $('#gender').val("");
	    $('#religion').val("");
	    $('#address').val("");
	    $('#previousInstitue').val("");
	    $('#caste').val("");
	    $('#acomitation').val("");
	    $('#buspesility').val("");
	    $('#busroute').val("");
	    $("#totalFee").val("");
		$("#discountFee1").val("");
	    $("#student-form").addClass('form-horizontal');
	});
	    
});
		
	 	function displayTable(listOrders) {
			if (listOrders != null) {
				$("#basicExample tr td").remove();
				$("#basicExample td").remove();
				serviceUnitArray = {};
				$.each(listOrders,function(i, orderObj) {
									if(orderObj.imagePath == null){
										orderObj.imagePath="img/default.png"
									}
//	 								contactNumber":"wertewrt","mediumId":"16","subjectId":"","name":"0","boardid":"1","gender":null,"className":"","qualifaction":"ewrt","section":""
									serviceUnitArray[orderObj.studentId] = orderObj;
									var id = '"' + orderObj.studentId + '"';
									var tblRow = "<tr align='center' role='row' class='odd'>" + "<td'><a id='"
											+ orderObj.studentId
											+ "' href='javascript:forOrderDetails("
											+ orderObj.studentId
											+ ")' style='font-color:red'>"
											+ orderObj.studentId
											+ "</a></td>"
//	 										+"<td><input class='checkall' type='checkbox' name='checkboxName' id='"+orderObj.studentId+"' value='"+orderObj.studentId+"'/></td>"
											+ "<td title='"+orderObj.studentName+"'>"
											+ orderObj.studentName
											+ "</td>"
											+ "<td class='hidden-sm hidden-xs'><img style='width: 65px;height: 65px;' src='"+baseUrl2+"/"+orderObj.imagePath+"'/>"
											+ "</td>"
											+ "<td class='hidden-sm hidden-xs' title='"+orderObj.rollNum+"'>"
											+ orderObj.rollNum
											+ "</td>"
											+ "<td class='hidden-sm hidden-xs' title='"+orderObj.boardName+"' >"
											+ orderObj.boardName
											+ "</td>"
											+ "<td class='hidden-sm hidden-xs' title='"+orderObj.mediumName+"'>"
											+ orderObj.mediumName
											+ "</td>"
											+ "<td class='hidden-sm hidden-xs' title='"+orderObj.fatherName+"' >"
											+ orderObj.fatherName
											+ "</td>"
											+ "<td>"
//	 										+ '<a onclick=getApplicant('
//	 										+ orderObj.studentId + ')'
//	 										+ '  ><i style="color: blue;" class="fa fa-file-text"></i></a>' + '&nbsp; | &nbsp;'
											+ '<a href="javascript:void(0)" onclick=editPack('
											+ orderObj.studentId + ')'
											+ '  ><i style="color: green;" class="fa fa-edit"></i></a>' + '&nbsp; | &nbsp;'
											+ '<a style="color: red;" href="javascript:void(0)" onclick=deleteStudent('
											+ orderObj.studentId + ')'
											+ '  ><i class="fa fa-trash-o"></i></a>' + '</td>'
											+ '</tr>';
									$(tblRow).appendTo("#basicExample");
									
									//$("#imageId1").attr('src', "@Url.Content("~/Content/images/ajax_activity.gif)")
								});
			} else {
				//alert('no data to display..');
			}
		}  
	 	function editPack(id) {
			var transactionId = serviceUnitArray[id].studentId;
			$("#id").val(serviceUnitArray[id].studentId);
			$("#acomitation").val(serviceUnitArray[id].acomitation);
			$('#address').val(serviceUnitArray[id].address);
			$('#admissionNum').val(serviceUnitArray[id].admissionNum);
			$('#medium').trigger("chosen:updated");
			$('#alternativeMobile').val(serviceUnitArray[id].alternativeMobile);
			$('#blodgroup').val(serviceUnitArray[id].blodgroup);
			$('#blodgroup').trigger("chosen:updated");
			$('#buspesility').val(serviceUnitArray[id].buspesility);
			$('#busroute').val(serviceUnitArray[id].busroute);
			$('#caste').val(serviceUnitArray[id].caste);
			$('#caste').trigger("chosen:updated");
			$('#email').val(serviceUnitArray[id].email);
			$('#fatherName').val(serviceUnitArray[id].fatherName);
			$('#fee').val(serviceUnitArray[id].fee);
			$('#gender').val(serviceUnitArray[id].gender);
			$('#gender').trigger("chosen:updated");
			$('#dob1').val(serviceUnitArray[id].dob);
			$('#previousInstitue').val(serviceUnitArray[id].previousInstitue);
			$('#religion').val(serviceUnitArray[id].religion);
			$('#religion').trigger("chosen:updated");
			$('#rollNum').val(serviceUnitArray[id].rollNum);
			$('#name').val(serviceUnitArray[id].studentName);
			$('#boardName').val(serviceUnitArray[id].boardId);
			$('#boardName').trigger("chosen:updated");
			$('#medium').val(serviceUnitArray[id].mediumId);
			$('#medium').trigger("chosen:updated");
			$('#className').val(serviceUnitArray[id].classId);
			$('#className').trigger("chosen:updated");
			$('#section').val(serviceUnitArray[id].sectionId);
			$('#section').trigger("chosen:updated");
			$("#mobile").val(serviceUnitArray[id].mobile);
			$("#totalFee").val(serviceUnitArray[id].totalFee);
			$("#discountFee1").val(serviceUnitArray[id].discountFee);
			$('#blah').attr('src',''+serviceUnitArray[id].imagePath+'');
			$("#submitId").val("Update");
			$("#headId").text("Edit Student");
		} 
		
		function serviceFilter(id){
			var borderId = $("#boardName").val();
			$('#loadAjax').show();
			$.ajax({
				type : "POST",
				url : "getBordName.json",
				data : "borderId=" + borderId,
				dataType : "json",
				success : function(response) {
					/* alert(response); */ 
					var optionsForClass = "";
					optionsForClass = $("#medium").empty();
					optionsForClass.append(new Option("--Select--", ""));
					$.each(response, function(i, tests) {
						var id=tests.id;
						var name=tests.name;
						optionsForClass.append(new Option(name, id));
					});
					$('#loadAjax').hide();
					$('#medium').trigger("chosen:updated");
				},
				error : function(e) {
					$('#loadAjax').hide();
				},
				statusCode : {
					406 : function() {
						$('#loadAjax').hide();
				
					}
				}
			});
			$('#loadAjax').hide();
		}

		function deleteStudent(id){
			
			var studentId = id;
			/* $('input[name=checkboxName]:checked').map(function() {
				studentId.push($(this).val());
			}); */
			var count = 0;
			var checkstr =  confirm('are you sure you want to delete this?');
			if(checkstr == true){
			  // do your code
				$('#loadAjax').show();
			  
			  $.ajax({
						type : "POST",
						url : "deleteStudent.json",
						data : "studentId=" + studentId ,
						success : function(response) {
							displayTable(response);
							$('#loadAjax').hide();
							window.location.href='studentHome';
						},
						error : function(e) {
							$('#loadAjax').hide();
						},
						statusCode : {
							406 : function() {
								$('#loadAjax').hide();
						
							}
						}
					});
			  $('#loadAjax').hide();
				
			}else{
			return false;
			}
		}
	function multipledeleteStudent(){
			
			var studentId = [];
			$('input[name=checkboxName]:checked').map(function() {
				studentId.push($(this).val());
			});
			var count = 0;
			var checkstr =  confirm('are you sure you want to delete this?');
			if(checkstr == true){
			  // do your code
				$('#loadAjax').show();
			  
			  $.ajax({
						type : "POST",
						url : "deleteStudent.json",
						data : "studentId=" + studentId ,
						success : function(response) {
							displayTable(response);
							$('#loadAjax').hide();
						},
						error : function(e) {
							$('#loadAjax').hide();
						},
						statusCode : {
							406 : function() {
								$('#loadAjax').hide();
						
							}
						}
					});
			  $('#loadAjax').hide();
				
			}else{
			return false;
			}
		}
	$("#checkAll").change(function () {
		$("input:checkbox").prop('checked', $(this).prop("checked"));
		var len=$("[name='checkboxName']:checked").length;
		if(len!=0)
		{
			$('#delbtn').show();
		}
		else
		{
			$('#delbtn').hide();
		}
	});
	$(".checkall").change(function () {
		var len=$("[name='checkboxName']:checked").length;
		if(len!=0)
		{
			$('#delbtn').show();
		}
		else
		{
			$('#delbtn').hide();
		}
	});


	function getFee(){
		var boardId = $('#boardName').val();
		var className = $('#className').val();
		var mediumId = $('#medium').val();
		var section = $('#section').val();
		$('#loadAjax').show();
		 $.ajax({
				type : "POST",
				url : "getClassFee.json",
				data : "boardId=" + boardId+"&className="+className+"&section="+section+"&mediumId="+mediumId,
				success : function(response) {
					/* alert(response); */
					if(response!=""){
					$("#totalFee").val(response.fee);
					}
				},
				error : function(e) {
					$('#loadAjax').hide();
				},
				statusCode : {
					406 : function() {
						$('#loadAjax').hide();
				
					}
				}
			});
		 $('#loadAjax').hide();
	}

	function getApplicant(id)
	{
		var image = null; image = serviceUnitArray[id].imagePath;
		if(image == null || image == ""){image= 'upload/default.png';}
		
		var name = null; name = serviceUnitArray[id].studentName;
		if(name == null || name == ""){name = "---";}
//	 	alert(serviceUnitArray[id].studentName);
		
		var board = null; board = serviceUnitArray[id].boardName;
		if(board == null || board == ""){board = "---";}
		
		var medium = null; medium = serviceUnitArray[id].mediumName;
		if(medium == null || medium == ""){medium = "---";}
		
		var clas = null; clas = serviceUnitArray[id].className;
		if(clas == null || clas == ""){clas = "---";}
		
		var section = null; section = serviceUnitArray[id].sectionName;
		if(section == null || section == ""){section = "---";}
		
		var rno = null; rno = serviceUnitArray[id].rollNum;
		if(rno == null || rno == ""){rno = "---";}
		
		var adno = null; adno = serviceUnitArray[id].admissionNum;
		if(adno == null || adno == ""){adno = "---";}
		
		var fname = null; fname = serviceUnitArray[id].fatherName;
		if(fname == null || fname == ""){fname = "---";}
		
		var mob = null; mob = serviceUnitArray[id].mobile;
		if(mob == null || mob == ""){mob = "---";}
		
		var alt = null; alt = serviceUnitArray[id].alternativeMobile;
		if(alt == null || alt == ""){alt = "---";}
		
		var email = null; email = serviceUnitArray[id].email;
		if(email == null || email == ""){email = "---";}
		
		var bg = null; bg = serviceUnitArray[id].blodgroup;
		if(bg == null || bg == ""){bg = "---";}
		
		var gender = null; gender = serviceUnitArray[id].gender;
		if(gender == null || gender == ""){gender = "---";}
		
//	 	var dob = null; dob = rs.getvar(15);
//	 	if(dob == null || dob == ""){dob = "---";}
		
		var rel = null; rel = serviceUnitArray[id].religion;
		if(rel == null || rel == ""){rel = "---";}
		
		var add = null; add = serviceUnitArray[id].address;
		if(add == null || add == ""){add = "---";}
		
		var pre = null; pre = serviceUnitArray[id].previousInstitue;
		if(pre == null || pre == ""){pre = "---";}
		
		var caste = null; caste = serviceUnitArray[id].caste;
		if(caste == null || caste == ""){caste = "---";}
		
		var acc = null; acc = serviceUnitArray[id].acomitation;
		if(acc == null || acc == ""){acc = "---";}
		
		var bus = null; bus = serviceUnitArray[id].buspesility;
		if(bus == null || bus == ""){bus = "---";}
		
		var busrt = null; busrt = serviceUnitArray[id].busroute;
		if(busrt == null || busrt == ""){busrt = "---";}
		
		var tblRow = "<table class='table no-margin' style='width: 50%;'>"
				+"<tr><td style='border: none;'><a style='cursor: pointer;' onclick='getBack()'><i class='fa fa-2x fa-reorder'></i></a></td><td style='border: none;'></td><td style='border: none;'><img style='width: 65px;height: 65px;' src='"+image+"'/></td></tr>"
				
				+"<tr><th>Name</th><td>:</td><td>"+name+"</td></tr>"
				
				+ "<tr><th>Type of Board</th><td>:</td><td>"+board+"</td></tr>"
				
				+ "<tr><th>Medium</th><td>:</td><td>"+medium+"</td></tr>"
				
				+ "<tr><th>Class</th><td>:</td><td>"+clas+"</td></tr>"
				
				+ "<tr><th>Section</th><td>:</td><td>"+section+"</td></tr>"
				
				+ "<tr><th>Roll No</th><td>:</td><td>"+rno+"</td></tr>"
				
				+ "<tr><th>Admission No</th><td>:</td><td>"+adno+"</td></tr>"
				
				+ "<tr><th>Father Name</th><td>:</td><td>"+fname+"</td></tr>"
				
				+ "<tr><th>Mobile No</th><td>:</td><td>"+mob+"</td></tr>"
				
				+ "<tr><th>Alternative No</th><td>:</td><td>"+alt+"</td></tr>"
				
				+ "<tr><th>Email</th><td>:</td><td>"+email+"</td></tr>"
				
				+ "<tr><th>Blood Group</th><td>:</td><td>"+bg+"</td></tr>"
				
				+ "<tr><th>Gender</th><td>:</td><td>"+gender+"</td></tr>"
				
//	 			+ "<tr><th>Date Of Birth</th><td>:</td><td>"+dob+"</td></tr>"
				
				+ "<tr><th>Religion</th><td>:</td><td>"+rel+"</td></tr>"
				
				+ "<tr><th>Address</th><td>:</td><td>"+add+"</td></tr>"
				
				+ "<tr><th>Previous Institute</th><td>:</td><td>"+pre+"</td></tr>"
				
				+ "<tr><th>Caste</th><td>:</td><td>"+caste+"</td></tr>"
				
				+ "<tr><th>Accommodation</th><td>:</td><td>"+acc+"</td></tr>"
				
				+ "<tr><th>Bus facility</th><td>:</td><td>"+bus+"</td></tr>"
				
				+ "<tr><th>Bus Route</th><td>:</td><td>"+busrt+"</td></tr>"
				
				+"</table>";
		$(tblRow).appendTo("#showData");
		$("#view_list").hide();
		$('#view_list1').hide();
	}

	function getBack()
	{
		$('#showData').html('');
		$('#view_list').show();
		$('#view_list1').show();
	}

	function classNameFilter(id){
		var boardId = $("#boardName").val();
		if(boardId.length !=0){
			$('#loadAjax').show();
		$.ajax({
			type : "POST",
			url : "getClassNameFilter.json",
			data : "boardId=" + boardId,
			dataType : "json",
			success : function(response) {
				 /* alert(response); */  
				var optionsForClass = "";
				optionsForClass = $("#className").empty();
				optionsForClass.append(new Option("-- Choose Class --", ""));
				$.each(response, function(i, tests) {
					var id=tests.id;
					var className=tests.className;
					optionsForClass.append(new Option(className, id));
				});
				$('#loadAjax').hide();
				$('#className').trigger("chosen:updated");
			},
			error : function(e) {
				$('#loadAjax').hide();
			},
			statusCode : {
				406 : function() {
					$('#loadAjax').hide();
			
				}
			}
		});
		$('#loadAjax').hide();

		}
	} 
		function sectionFilter(){
		var boardId = $("#boardName").val();
		var classId = $("#className").val();
		if(boardId.length !=0 && classId.length != 0){
			$('#loadAjax').show();
		$.ajax({
			type : "POST",
			url : "getSectionFilter.json",
			data : "boardId=" + boardId+"&classId="+classId,
			dataType : "json",
			success : function(response) {
				 /* alert(response); */  
				var optionsForClass = "";
				optionsForClass = $("#section").empty();
				optionsForClass.append(new Option("-- Choose Section --", ""));
				$.each(response, function(i, tests) {
					var id=tests.id;
					var sectionName=tests.sectionName;
					optionsForClass.append(new Option(sectionName, id));
				});
				$('#loadAjax').hide();
				$('#section').trigger("chosen:updated");
			},
			error : function(e) {
				$('#loadAjax').hide();
			},
			statusCode : {
				406 : function() {
					$('#loadAjax').hide();
			
				}
			}
		});
		$('#loadAjax').hide();
		}
	} 
		function mediumFilter(){
		var boardId = $("#boardName").val();
		var classId = $("#className").val();
		var sectionId = $("#section").val();
		if(boardId.length !=0 && classId.length != 0 &&  sectionId.length != 0){
			$('#loadAjax').show();
		$.ajax({
			type : "POST",
			url : "getMediumFilter.json",
			data : "boardId=" + boardId+"&classId="+classId+"&sectionId="+sectionId,
			dataType : "json",
			success : function(response) {
				 /* alert(response); */  
				var optionsForClass = "";
				optionsForClass = $("#medium").empty();
				optionsForClass.append(new Option("-- Choose Medium --", ""));
				$.each(response, function(i, tests) {
					var id=tests.id;
					var mediumName=tests.mediumName;
					optionsForClass.append(new Option(mediumName, id));
				});
				$('#loadAjax').hide();
				$('#section').trigger("chosen:updated");
			},
			error : function(e) {
				$('#loadAjax').hide();
			},
			statusCode : {
				406 : function() {
					$('#loadAjax').hide();
			
				}
			}
		});
		$('#loadAjax').hide();
		}
	} 
		
		 /* $(document).ready(function(){
		 		$("select").chosen({allow_single_deselect:true});
		 }); */
