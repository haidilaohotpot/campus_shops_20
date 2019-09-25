package cn.edu.mju.web.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

//编码过滤器
public class CodingFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {

        //设置编码为UTF-8
        req.setCharacterEncoding("UTF-8");


        chain.doFilter(req, resp);

    }

    public void init(FilterConfig config) throws ServletException {

    }

}
