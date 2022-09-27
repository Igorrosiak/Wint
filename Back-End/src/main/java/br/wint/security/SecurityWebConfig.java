package br.wint.security;

import br.wint.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityWebConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserServiceImpl userService;

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .authorizeRequests()
                .antMatchers("/**").permitAll();
//                .antMatchers("/pre-login/**").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                .loginPage("/pre-login/login")
//                .defaultSuccessUrl("/pos-login/home", true)
//                .permitAll()
//                .and()
//                .rememberMe()
//                .and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"));
    }

//    @Override
//    public void configure(AuthenticationManagerBuilder auth) throws Exception{
//        auth.authenticationProvider(authProvider());
//    }
//
//    @Bean
//    public DaoAuthenticationProvider authProvider(){
//        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
//        authenticationProvider.setUserDetailsService(userService);
//        authenticationProvider.setPasswordEncoder(passwordEnconder());
//        return authenticationProvider;
//    }
//
//    @Bean
//    public PasswordEncoder passwordEnconder(){
//        return new BCryptPasswordEncoder();
//    }

//    @Override
//    public void configure(WebSecurity web) throws Exception{
//        web.ignoring().antMatchers("/css/**", "/bootstrap-5.0.0/**", "/img/**", "/js/**");
//    }
}