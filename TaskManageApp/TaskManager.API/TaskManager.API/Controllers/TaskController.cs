using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaskManager.API.Models;

namespace TaskManager.API.Controllers
{
    [RoutePrefix("api/Task")]
    public class TaskController : ApiController
    {
        [HttpGet]
        [Route("GetTask")]
        public HttpResponseMessage GetTask()
        {
            try
            {
                using (TaskManagerDBContext dbContext = new TaskManagerDBContext())
                {
                    var Tasks = dbContext.Tasks.ToList();
                    return Request.CreateResponse(HttpStatusCode.OK, Tasks);
                }
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }           
        }
        [HttpGet]
        [Route("GetTask/{id}")]
        public HttpResponseMessage GetTask(int id)
        {
            using (TaskManagerDBContext dbContext = new TaskManagerDBContext())
            {
                var entity = dbContext.Tasks.FirstOrDefault(e => e.Id == id);
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                        "Task with ID " + id.ToString() + "not found");
                }
            }
        }

        [HttpPost]
        [Route("AddTask")]
        public HttpResponseMessage AddTask([FromBody] Task task)
        {
            try
            {
                using (TaskManagerDBContext dbContext = new TaskManagerDBContext())
                {
                    dbContext.Tasks.Add(task);
                    dbContext.SaveChanges();

                    var message = Request.CreateResponse(HttpStatusCode.Created, task);
                    message.Headers.Location = new Uri(Request.RequestUri +
                        task.Id.ToString());

                    return message;
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        [HttpPut]
        [Route("UpdateTask/{Id}")]
        public HttpResponseMessage UpdateTask(int id, [FromBody] Task task)
        {
            try
            {
                using (TaskManagerDBContext dbContext = new TaskManagerDBContext())
                {
                    var entity = dbContext.Tasks.FirstOrDefault(e => e.Id == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                            "Task with Id " + id.ToString() + " not found to update");
                    }
                    else
                    {
                        entity.TaskName = task.TaskName;
                        entity.Description = task.Description;
                        entity.DueDate = task.DueDate;
                        entity.IsCompleted = task.IsCompleted;

                        dbContext.SaveChanges();

                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }

        }
        [HttpDelete]
        [Route("DeleteTask/{id}")]
        public HttpResponseMessage DeleteTask(int id)
        {
            try
            {
                using (TaskManagerDBContext dbContext = new TaskManagerDBContext())
                {
                    var entity = dbContext.Tasks.FirstOrDefault(e => e.Id == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound,"Task with Id = " + id.ToString() + " not found to delete");
                    }
                    else
                    {
                        dbContext.Tasks.Remove(entity);
                        dbContext.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        //[HttpPatch]
        //public HttpResponseMessage MarkTaskAsCompleted(int id)
        //{
        //    try
        //    {
        //        using(TaskManagerDBContext dBContext = new TaskManagerDBContext())
        //        {
        //            var task = dBContext.Tasks.Find(id);

        //            if(task == null) {

        //                return NotFound();
        //            }

        //            task.IsCompleted = true;

        //            dBContext.SaveChanges();
        //            return Ok(task);
        //        }

        //    }
        //    catch(Exception ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
        //    }
        //}
    }
    
}
