package com.aurospaces.neighbourhood.db.basemodel;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



import java.util.Date;
import java.math.BigDecimal;


/**
 *
 * @author autogenerated
 */



public class BaseCoupon1 
{

@Id
@GeneratedValue(strategy=GenerationType.AUTO)
		 /** Field mapping. **/
@Column(name= "id")
protected int id   = 0;

/** Field mapping. **/
@Column(name= "code")
protected String code ;

/** Field mapping. **/
@Column(name= "percentage")
protected String percentage ;

/** Field mapping. **/
@Column(name= "price")
protected double price ;

/** Field mapping. **/
@Column(name= "service_id")
protected int serviceId ;

public int getId()
{
  return id;
}
public void setId(final int id)
{
  this.id = id;
}
public String getCode()
{
  return code;
}
public void setCode(final String code)
{
  this.code = code;
}
public String getPercentage()
{
  return percentage;
}
public void setPercentage(final String percentage)
{
  this.percentage = percentage;
}
public double getPrice()
{
  return price;
}
public void setPrice(final double price)
{
  this.price = price;
}
public int getServiceId()
{
  return serviceId;
}
public void setServiceId(final int serviceId)
{
  this.serviceId = serviceId;
}

}