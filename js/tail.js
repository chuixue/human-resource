// JavaScript Document
$.ajaxSetup({ async: false });  
$("<div></div>").load(tm_path + "tail.html",function(){
	document.write(this.innerHTML.match(/<xmp>([\s\S]*?)<\/xmp>/)[1]);
	IsReady=2;
});

$.ajaxSetup({ async: true });

	
 $(document).ready(function() {
    //+function ($) {
      //$(function(){
		var menus = [{ name:"员工构成", icon:'user text-info-dker', chlidren:[
            {name:'年龄分布', url:'#'}, {name:'工龄分布', url:'#'}, {name:'性别分布', url:'#'}, 
            {name:'员工籍贯', url:'#'}, {name:'员工学历', url:'#'}, {name:'员工职能', url:'#'}, {name:'其它分析', url:'#'} 
        ]},
        {name:"时间画像", icon:'time text-success', chlidren:[
            {name:'打卡时间', url:'#'}, {name:'迟到统计', url:'#'}, {name:'早退统计', url:'#'}, 
            {name:'加班统计', url:'#'}, {name:'时间分配', url:'#'}, {name:'其它分析', url:'#'},
        ]},
        {name:"员工绩效", icon:'credit-card text-primary', chlidren:[
            {name:'绩效统计', url:'#'}, {name:'薪酬统计', url:'#'}, {name:'对比分析', url:'#'}, 
            {name:'其它分析', url:'#'}
        ]},
        {name:"职业路径", icon:'tasks text-info', chlidren:[
            {name:'频繁模式挖掘', url:'#'}, {name:'路径预测', url:'#'}
        ]},
        {name:"互动关系", icon:'eye-open text-info-lt', chlidren:[
            {name:'工作关系', url:'#'}, {name:'社交关系', url:'#'}, {name:'复杂网络分析', url:'#'}, 
            {name:'异常预警', url:'#'}, 
        ]},			
        ];
		var datas = [{name:"数据样例", icon:'file', chlidren:[
            {name:'人力资源数据1', url:'#'}
        ]}];
		
        var tm_menu = $("#tm_menu1").html();
        $("#bar-human").after(ejs.render(tm_menu, { menu: menus }));
		$("#bar-data").after(ejs.render(tm_menu, { menu: datas }));
		
		
        $(document).on('click', '[data-toggle^="class"]', function(e){
          e && e.preventDefault();
          var $this = $(e.target), $class , $target, $tmp, $classes, $targets;
          !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
          $class = $this.data()['toggle'];
          $target = $this.data('target') || $this.attr('href');
          $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
          $target && ($targets = $target.split(','));
          $classes && $classes.length && $.each($targets, function( index, value ) {
            if ( $classes[index].indexOf( '*' ) !== -1 ) {
              var patt = new RegExp( '\\s' + 
                  $classes[index].
                    replace( /\*/g, '[A-Za-z0-9-_]+' ).
                    split( ' ' ).
                    join( '\\s|\\s' ) + 
                  '\\s', 'g' );
              $($this).each( function ( i, it ) {
                var cn = ' ' + it.className + ' ';
                while ( patt.test( cn ) ) {
                  cn = cn.replace( patt, ' ' );
                }
                it.className = $.trim( cn );
              });
            }
            ($targets[index] !='#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
          });
          $this.toggleClass('active');
        });
        // collapse nav
        $(document).on('click', 'nav a', function (e) {
          var $this = $(e.target), $active;
          $this.is('a') || ($this = $this.closest('a'));
          
          $active = $this.parent().siblings( ".active" );
          $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);
          
          ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
          $this.parent().toggleClass('active');
          
          $this.next().is('ul') && e.preventDefault();

          setTimeout(function(){ $(document).trigger('updateNav'); }, 300);      
        });
      //});
	  
	  //setFrame();
	  	  
    //}(jQuery);
 });