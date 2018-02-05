    <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
        <%@ taglib prefix="ehaofang" uri="http://myjstl" %>
        <div class="topWrap">
        <div class="top">
        <div class="logo">
        <a href="index.jsp">
        <img src="img/logo.png" alt="易好房楼盘开发" title="易好房楼盘开发" />
        </a>
        </div>
        <div class="mine">
        <div></div>
        <a href="http://sso.ehaofang.com/ehaofang-ssoweb/login/loginout.do">退出</a>
        </div>
        <ul class="nav">
        <ehaofang:pre test="homepage">
        <li class="singleNav">首页</li>
        </ehaofang:pre>
        <ehaofang:pre test="projectmanager">
        <li class="singleNav">项目经营</li>
        </ehaofang:pre>
        <ehaofang:pre test="projectdevelop">
        <li class="navActive">项目开发
        <i class=" icon-caret-down"></i>
        <div>
        <dl>
            <ehaofang:pre test="Propertydevelop">
        <p id="property"><a href="http://loupan.ehaofang.com/ehaofang-pmweb/pages/index.jsp">开发楼盘</a></p>
            </ehaofang:pre>
            <ehaofang:pre test="landdevelop">
        <p id="land1"><a href="http://loupan.ehaofang.com/ehaofang-pmweb/pages/land.jsp">土地拍卖</a></p>
        </ehaofang:pre>
        <span></span>
        </dl>
        </div>
        </li>
        </ehaofang:pre>
        <ehaofang:pre test="agency">
        <li>渠道
        <i class=" icon-caret-down"></i>
        <div>
        <dl>
        <ehaofang:pre test="agencycompany">
        <p><a href="javascript:;">渠道公司</a></p>
        </ehaofang:pre>
        <ehaofang:pre test="store">
        <p><a href="javascript:;">门店</a></p>
        </ehaofang:pre>
        <span></span>
        </dl>
        </div>
        </li>
        </ehaofang:pre>
        <ehaofang:pre test="customer">
        <li class="singleNav">客户</li>
        </ehaofang:pre>
        <ehaofang:pre test="trading">
        <li>交易中心
        <i class=" icon-caret-down"></i>
        <div>
        <dl>
        <ehaofang:pre test="tradinglist">
        <p><a href="javascript:;">交易列表</a></p>
        </ehaofang:pre>
        <ehaofang:pre test="commissionlist">
        <p><a href="javascript:;">申佣列表</a></p>
        </ehaofang:pre>
        <span></span>
        </dl>
        </div>
        </li>
        </ehaofang:pre>
        <ehaofang:pre test="finance">
        <li>财务中心
        <i class=" icon-caret-down"></i>
        <div>
        <dl>
        <ehaofang:pre test="reimbursement">
        <p id="financeCenter"><a href="http://reimbursement.ehaofang.com/ddExpenses/finance/html/financeCenter.jsp">报销</a></p>
        </ehaofang:pre>
        <ehaofang:pre test="profit">
        <p><a href="javascript:;">盈亏损益</a></p>
        </ehaofang:pre>
        <span></span>
        </dl>
        </div>
        </li>
        </ehaofang:pre>
        <ehaofang:pre test="organization">
        <li>组织架构
        <i class=" icon-caret-down"></i>
        <div>
        <dl>
        <ehaofang:pre test="usercenter">
        <p><a href="javascript:;">员工中心</a></p>
        </ehaofang:pre>
        <ehaofang:pre test="department">
        <p><a href="javascript:;">部门管理</a></p>
        </ehaofang:pre>
        <span></span>
        </dl>
        </div>
        </li>
        </ehaofang:pre>
        <ehaofang:pre test="datacenter">
        <li class="singleNav">数据中心</li>
        </ehaofang:pre>
        </ul>
        </div>
        </div>