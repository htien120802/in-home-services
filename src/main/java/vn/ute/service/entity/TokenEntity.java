package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Table(name = "Token")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TokenEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    public UUID id;

    @Column(unique = true)
    public String token;

    public String tokenType = "BEARER";

    public boolean revoked;

    public boolean expired;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    public AccountEntity account;
}
