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



public class BaseCluster1 
{

@Id
@GeneratedValue(strategy=GenerationType.AUTO)
		 /** Field mapping. **/
@Column(name= "id")
protected int id   = 0;

/** Field mapping. **/
@Column(name= "created_time")
protected Date createdTime ;

/** Field mapping. **/
@Column(name= "updated_time")
protected Date updatedTime ;

/** Field mapping. **/
@Column(name= "latitude")
protected double latitude ;

/** Field mapping. **/
@Column(name= "longitude")
protected double longitude ;

/** Field mapping. **/
@Column(name= "weightage")
protected double weightage ;

public int getId()
{
  return id;
}
public void setId(final int id)
{
  this.id = id;
}
public Date getCreatedTime()
{
  return createdTime;
}
public void setCreatedTime(final Date createdTime)
{
  this.createdTime = createdTime;
}
public Date getUpdatedTime()
{
  return updatedTime;
}
public void setUpdatedTime(final Date updatedTime)
{
  this.updatedTime = updatedTime;
}
public double getLatitude()
{
  return latitude;
}
public void setLatitude(final double latitude)
{
  this.latitude = latitude;
}
public double getLongitude()
{
  return longitude;
}
public void setLongitude(final double longitude)
{
  this.longitude = longitude;
}
public double getWeightage()
{
  return weightage;
}
public void setWeightage(final double weightage)
{
  this.weightage = weightage;
}

}