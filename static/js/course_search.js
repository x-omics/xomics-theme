/**
 * Created by < Allen Heavey > on 14/11/17.
 *               Bazinga!
 * Enjoy life, enjoy code, happy everyday!.
 */

"use strict";

(function () {

  var search_input = $('#search-query');
  var course_panel = $('#x_course_panel');
  var course_label = $('#x_search_label');
  var course_title = $('#x_search_label_title');
  var course_close = $('#x_search_label_close');

  var bAjaxSearch = false;

  search_input.on('focusin', function () {
    toggleCoursePanel();
    // 添加键盘回车键事件
    // 按下Enter键即发出Ajax请求。
    search_input.keyup(function(evt) {
      //console.log(evt.keyCode);
      searchCourse();
    });
  });

  search_input.on('focusout', function () {
    toggleCoursePanel();
  });

  function toggleCoursePanel() {
    course_panel.slideToggle(300, function () {
    });
  }

  course_close.on('click', function() {

    course_label.addClass('hidden');
    search_input.removeClass('hidden');

  });

  function searchCourse() {

    var searchValue = search_input.val();

    if(!searchValue || searchValue === '') {
      return false;
    }

    //var url = "find_courses_by_search?search=" + search;
    var url = 'http://www.xuetangx.com/courses/search?limit=10&offset=0&cid=2&started=false&hasTA=false';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'application/json',
      success: function (data) {
        //$('#my_courses_list_nb').html(data);
        console.log(data);
      }
    });
    return false;
  }

  $('#subject').find('li').on('click', function () {

    var labelTitle = $(this).find('span').text();
    course_title.text(labelTitle);

    search_input.addClass('hidden');
    course_label.removeClass('hidden');

    var subject_name = $(this).attr('name');

    /*
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'html',
      success: function (data) {
        $('#my_courses_list_nb').html(data);
      }

    });
   * */
  });
})();

