<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://displaytag.sf.net" prefix="display"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>


	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js"></script>
	<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/jquery.validate.min.js"></script>
	<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/additional-methods.min.js"></script>

	<script type="text/javascript" src="js/homejsp.js"></script>
	
<!-- 	<div class="loadingajax" id="loadAjax" style="display:none"></div> -->
	
		<!-- Dashboard Wrapper starts -->
		<div class="dashboard-wrapper">

			<!-- Top Bar starts -->
			<div class="top-bar">
				<div class="page-title" id="headId"> Add Class</div>
			</div>
			<!-- Top Bar ends -->

			<!-- Main Container starts -->
			<div class="main-container">

				<!-- Container fluid Starts -->
				<div class="container-fluid">

					<!-- Spacer starts -->
					<div class="spacer">
					
						<!-- Row Starts -->
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="blog" style="border: 1px solid;">
									<!-- <div class="blog-header">
										<h5 class="blog-title">Class Creation</h5>
									</div> -->
									<div class="blog-body">
<%-- 									<%${message} %> --%>
			
									<form:form action="addclass.htm" commandName="packCmd" method="post" id="cls-form" class="form-horizontal">
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
											<div class="form-group">
											    <label for="inputEmail3" class="col-sm-4 control-label">Board Name</label>
											    <div class="col-sm-8">
												    <form:select path="boardId" tabindex="1" class="form-control" required="true">
														<form:option value="">-- Choose Board --</form:option>
														<form:options items="${board}"></form:options>
													</form:select>
													<span class="boardId_error" id="boardId_error"></span>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
											<div class="form-group">
											    <label for="inputEmail3" class="col-sm-4 control-label">Medium</label>
											    <div class="col-sm-8">
												    <form:select path="mediumId" tabindex="2" class="form-control" required="true">
														<form:option value="">-- Choose Medium --</form:option>
														<form:options items="${mediam}"></form:options>
													</form:select>
<%-- 													<form:input path="mediumId" class="form-control onlyCharacters" tabindex="2" placeholder="Enter Medium" required="true"/> --%>
													<span class="mediumId_error" id="mediumId_error"></span>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
											<div class="form-group">
											    <label for="inputEmail3" class="col-sm-4 control-label">Class/Branch</label>
											    <div class="col-sm-8">
												    <form:select path="className" tabindex="3" class="form-control" required="true" onclick=" classNameFilter(this.id);">
														<form:option value="">-- Choose Class --</form:option>
<%-- 														<form:options items="${allClasses}"></form:options> --%>
													</form:select>
<%-- 													<form:input path="className" class="form-control" tabindex="3" placeholder="Enter Class/Branch" required="true"/> --%>
													<span class="className_error" id="className_error"></span>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
											<div class="form-group">
											    <label for="inputEmail3" class="col-sm-4 control-label">Section</label>
											    <div class="col-sm-8">
												    <form:select path="section" tabindex="4" class="form-control" required="true">
														<form:option value="">-- Choose Section --</form:option>
														<form:options items="${allSection}"></form:options>
													</form:select>
<%-- 													<form:input path="section" class="form-control" tabindex="4" placeholder="Enter Section" required="true"/> --%>
													<span class="section_error" id="section_error"></span>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
											<div class="form-group">
											    <label for="inputEmail3" class="col-sm-4 control-label">Fees</label>
											    <div class="col-sm-8">
													<form:input path="fee" class="form-control numericOnly" tabindex="5" placeholder="Enter Fee for the Class" required="true"/>
													<span class="fee_error" id="fee_error"></span>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-8 col-sm-offset-4">
											<form:hidden path="id"/>
											<div class="form-group">
												<div class="col-sm-8 col-sm-offset-2">
													<input type="submit" id="submitId" value="Submit" class="btn btn-success" tabindex="6"/>
													<button type="button" class="btn btn-danger" id="cancel" tabindex="7">Reset</button>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-8 col-sm-offset-4">
											<div class="form-group">
												<div class="col-sm-8 col-sm-offset-2">
												<%
													String message = null;
													message=(String)session.getAttribute("message");
											        if(message!=null)
											        {
														out.println("<span class='animated fadeIn' style='animation-iteration-count: 7;animation-duration: 1s;color: red;'>"+message+"</span>");
														session.setAttribute("message", null);
													}
										        %>
												</div>
											</div>
										</div>
									</div>
									</form:form>
									
									</div>
								</div>
							</div>
						</div>
						<!-- Row Ends -->
						
						<!-- Row Starts -->
						<div class="row gutter">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="blog">
									<div class="blog-header">
										<h4>List of Classes</h4>
									</div>
									<div class="blog-body">
										<div class="table-responsive">
											<div id="basicExample_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
												<div class="row">
													<div class="col-sm-12">
 														<table id="basicExample" class="table table-striped table-condensed table-bordered no-margin dataTable" role="grid" aria-describedby="basicExample_info">
															<thead>
																<tr role="row">
																	<th class="sorting_asc" tabindex="0" aria-controls="basicExample" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending">Board</th>
																	<th class="sorting hidden-sm hidden-xs" tabindex="0" aria-controls="basicExample" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending">Medium</th>
																	<th class="sorting" tabindex="0" aria-controls="basicExample" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending">Class</th>
																	<th class="sorting hidden-sm hidden-xs" tabindex="0" aria-controls="basicExample" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending">Section</th>
																	<th class="sorting hidden-sm hidden-xs" tabindex="0" aria-controls="basicExample" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending">Fees</th>
																	<th class="sorting" tabindex="0" aria-controls="basicExample" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending">Action</th>
																</tr>
															</thead>
															<!-- <tfoot>
																<tr><th rowspan="1" colspan="1">Board</th><th rowspan="1" colspan="1">Medium</th><th rowspan="1" colspan="1">Class</th><th rowspan="1" colspan="1">Section</th><th rowspan="1" colspan="1">Fees</th><th rowspan="1" colspan="1">Action</th></tr>
															</tfoot> -->
															<tbody>
																
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Row Ends -->
						
					</div>
					<!-- Spacer ends -->

				</div>
				<!-- Container fluid ends -->

			</div>
			<!-- Main Container ends -->

		</div>
		<!-- Dashboard Wrapper ends -->

<!-- <script src="http://code.jquery.com/jquery-1.10.2.js"></script> -->
<!-- <script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script> -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script>
	var listOrders1 = ${allOrders1};
	if (listOrders1 != "") {
		displayTable(listOrders1);
	}else{
		$("#emptyMessageId").val("No Results Found");
	}
	

</script>
>>>>>>> branch 'master' of https://github.com/kotaiahandraju/School.git
